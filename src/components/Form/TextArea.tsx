import React, { useEffect, useCallback, useRef, useState } from "react";
import type {
  unstable_FormStateReturn as FormStateReturn,
  unstable_FormInputProps as FormInputProps
} from "reakit/Form";
import { unstable_FormInput as FormInput } from "reakit/Form";
import { Input, InputShadow } from "./elements";
import { split, debounce } from "../../utils";

const FORM_KEYS = [
  `baseId`,
  `unstable_idCountRef`,
  `values`,
  `touched`,
  `messages`,
  `errors`,
  `validating`,
  `valid`,
  `submitting`,
  `submitSucceed`,
  `submitFailed`,
  `setBaseId`,
  `reset`,
  `validate`,
  `submit`,
  `update`,
  `blur`,
  `push`,
  `remove`
] as const;

const getStyleValue = (
  computedStyle: CSSStyleDeclaration,
  property: string
): number => parseInt(computedStyle.getPropertyValue(property), 10) || 0;

interface TextAreaProps
  extends Partial<FormInputProps<any, any>>,
    Partial<FormStateReturn<any>> {
  rowsMin?: string | number;
  rowsMax?: string | number;
}

interface TextAreaState {
  outerHeightStyle?: string | number;
  overflow?: boolean;
}

export const TextArea: React.VFC<TextAreaProps> = ({
  name,
  rowsMin = 1,
  rowsMax,
  style,
  ...props
}) => {
  const { extracted: form, excluded: rest } = split(props, ...FORM_KEYS);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const shadowRef = useRef<HTMLTextAreaElement | null>(null);
  const renders = useRef(0);
  const [state, setState] = useState<TextAreaState>({});

  const syncHeight = useCallback(() => {
    const input = inputRef.current;
    if (input) {
      const computedStyle = window.getComputedStyle(input);

      const inputShallow = shadowRef.current;

      if (inputShallow) {
        inputShallow.style.width = computedStyle.width;
        inputShallow.value = (input.value || props.placeholder) ?? `x`;

        const boxSizing = computedStyle.getPropertyValue(`box-sizing`);
        const padding =
          getStyleValue(computedStyle, `padding-bottom`) +
          getStyleValue(computedStyle, `padding-top`);
        const border =
          getStyleValue(computedStyle, `border-bottom-width`) +
          getStyleValue(computedStyle, `border-top-width`);
        const innerHeight = inputShallow.scrollHeight - padding;

        inputShallow.value = `x`;
        const singleRowHeight = inputShallow.scrollHeight - padding;

        let outerHeight = innerHeight;

        if (rowsMin) {
          outerHeight = Math.max(
            Number(rowsMin) * singleRowHeight,
            outerHeight
          );
        }
        if (rowsMax) {
          outerHeight = Math.min(
            Number(rowsMax) * singleRowHeight,
            outerHeight
          );
        }
        outerHeight = Math.max(outerHeight, singleRowHeight);

        const outerHeightStyle =
          outerHeight + (boxSizing === `border-box` ? padding + border : 0);
        const overflow = Math.abs(outerHeight - innerHeight) <= 1;

        setState((prevState) => {
          if (
            renders.current < 20 &&
            ((outerHeightStyle > 0 &&
              Math.abs(
                (Number(prevState.outerHeightStyle) || 0) - outerHeightStyle
              ) > 1) ||
              prevState.overflow !== overflow)
          ) {
            renders.current += 1;
            return {
              overflow,
              outerHeightStyle
            };
          }

          if (process.env.NODE_ENV !== `production`) {
            if (renders.current === 20) {
              // eslint-disable-next-line no-console
              console.error(
                [
                  `Text-Area: too many re-renders. The layout is unstable.`,
                  `Textarea limits the number of renders to prevent an infinite loop.`
                ].join(`\n`)
              );
            }
          }

          return prevState;
        });
      }
    }
  }, [rowsMax, rowsMin, props.placeholder]);

  useEffect(() => {
    const handleResize = debounce(() => {
      renders.current = 0;
      syncHeight();
    });

    window.addEventListener(`resize`, handleResize);
    return (): void => {
      handleResize.clear();
      window.removeEventListener(`resize`, handleResize);
    };
  }, [syncHeight]);

  useEffect(() => {
    syncHeight();
  });

  useEffect(() => {
    renders.current = 0;
  }, [props.value]);

  return (
    <>
      <FormInput {...(form as FormStateReturn<any>)} name={name}>
        {(inputProps): React.ReactElement => (
          <Input
            {...inputProps}
            {...rest}
            as="textarea"
            ref={inputRef}
            rows={Number(rowsMin)}
            style={{
              height: state.outerHeightStyle,
              // eslint-disable-next-line no-undefined
              overflow: state.overflow ? `hidden` : undefined,
              ...style
            }}
          />
        )}
      </FormInput>
      <InputShadow ref={shadowRef} tabIndex={-1} style={style} />
    </>
  );
};
