import React, { useEffect } from "react";
import type {
  unstable_FormInitialState as initialFormState,
  unstable_FormStateReturn as FormStateReturn
} from "reakit/Form";
import { unstable_useFormState as useFormState } from "reakit/Form";
import { injectProps, isRenderFunction } from "../../utils";
import { Container } from "./elements";

type V = Record<string, unknown>;

export interface FormProps
  extends Omit<React.ComponentProps<typeof Container>, "baseId" | "submit"> {
  onChange?: (values: V) => void;
  onValidate?: initialFormState<V>["onValidate"];
  onSubmit?: initialFormState<V>["onSubmit"];
  children?:
    | React.ReactNode
    | ((formState: FormStateReturn<unknown>) => React.ReactNode);
}

export const Form: React.FC<FormProps> = ({
  baseId,
  values = {},
  validateOnBlur,
  validateOnChange,
  resetOnSubmitSucceed,
  resetOnUnmount,
  onChange = (): void => {},
  onValidate,
  onSubmit,
  children,
  ...props
}) => {
  const form = useFormState({
    baseId,
    values,
    validateOnBlur,
    validateOnChange,
    resetOnSubmitSucceed,
    resetOnUnmount,
    onValidate,
    onSubmit
  });

  useEffect(() => {
    if (typeof onChange === `function`) {
      onChange(form.values);
    }
  }, [onChange, form.values]);

  return (
    <Container {...form} {...props}>
      {children && isRenderFunction(children) && React.isValidElement(children)
        ? injectProps(children(form), form)
        : injectProps(children, form)}
    </Container>
  );
};
