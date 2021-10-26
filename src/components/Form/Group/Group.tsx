import React from "react";
import type { unstable_FormStateReturn as FormState } from "reakit";
import {
  unstable_FormRadioGroup as BaseRadioGroup,
  unstable_FormGroup as BaseFormGroup
} from "reakit";
import { injectProps } from "../../../utils/injectProps";
import { FieldSet } from "./elements";

interface BaseGroupProps extends Partial<FormState<Record<string, unknown>>> {
  as?: React.ElementType<
    React.HTMLAttributes<HTMLFieldSetElement | HTMLDivElement>
  >;
  name?: string;
  className?: string;
  style?: React.CSSProperties;
}

const BaseGroup: React.FC<BaseGroupProps> = ({
  as,
  className,
  style,
  children,
  ...props
}) => (
  <FieldSet
    as={
      props.name
        ? as // eslint-disable-next-line no-undefined
        : undefined
    }
    className={className}
    style={style}
    {...(props.name ? props : {})}
  >
    {injectProps(children, { ...props, group: true })}
  </FieldSet>
);

export const Group: React.FC<BaseGroupProps> = ({
  as = BaseFormGroup,
  ...props
}) => <BaseGroup as={as} {...props} />;

export const RadioGroup: React.FC<BaseGroupProps> = ({
  as = BaseRadioGroup,
  ...props
}) => <BaseGroup as={as} {...props} />;
