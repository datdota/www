import type { DefaultTheme } from "styled-components";
import styled, { css } from "styled-components";
import {
  unstable_Form as BaseForm,
  unstable_FormInput as BaseInput,
  unstable_FormCheckbox as BaseCheckbox,
  unstable_FormRadio as BaseRadio,
  unstable_FormLabel as BaseLabel,
  unstable_FormMessage as BaseMessage,
  unstable_FormRemoveButton as BaseRemove,
  unstable_FormPushButton as BasePush,
  unstable_FormSubmitButton as BaseSubmit
} from "reakit/Form";
import { Button } from "../Button";
import type { IsActive } from "./Action";
import { Action, isActive, isValid } from "./Action";

export const Container = styled(BaseForm)(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
  `
);

export const inputStyles = ({
  valid = false
}: {
  valid?: boolean;
  theme?: DefaultTheme;
}): ReturnType<typeof css> => css`
  display: inline-flex;
  align-items: center;
  width: 100%;
  max-width: 40ch;
  padding: calc((1.6rem * 0.75) / 2) 1.5ch;
  margin-bottom: 1.6rem;
  border: 0.1rem solid #d7d4cd;
  border-bottom-color: ${valid ? `#D7D4CD` : `#D9027D`};
  background-color: transparent;
  box-sizing: border-box;
  color: #000;
  font-size: 1.6rem;
  transition: 0.3s ease border-color;
  outline: none;
  &:disabled {
    background-color: #f9f9f9;
    color: #d7d4cd;
  }
  &:invalid {
    border-bottom-color: #d9027d;
    color: #d9027d;
    &::placeholder {
      color: #d9027d;
      opacity: 50%;
    }
    &:hover,
    &:focus {
      border-color: #7c7a75;
      border-bottom-color: #d9027d;
    }
  }
  &::placeholder {
    color: ${valid ? `#D7D4CD` : `#D9027D`};
    font-style: italic;
  }
  &:hover:not(:disabled):not(:invalid),
  &:focus:not(:disabled):not(:invalid) {
    border-color: #7c7a75;
    color: #000;
  }
`;

export const Input = styled(BaseInput)(inputStyles);

export const InputShadow = styled.textarea.attrs({
  "aria-hidden": true,
  readOnly: true
})(
  () => css`
    ${inputStyles({})}
    visibility: hidden;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    transform: translateZ(0);
  `
);

interface ToggleStyles {
  active?: boolean;
  disabled?: boolean;
  valid?: boolean;
}

const toggleStyles = ({
  active = false,
  disabled = false,
  valid = false
}: ToggleStyles): ReturnType<typeof css> => css`
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  width: 1ch;
  height: 1ch;
  border: 0.1rem solid ${valid ? `#D7D4CD` : `#D9027D`};
  border-color: ${active && `#00A3E0`};
  background-color: ${active ? `#00A3E0` : `transparent`};
  color: ${valid ? `#000` : `#D9027D`};
  box-sizing: border-box;
  color: #000;
  font-size: 2.8rem;
  ${disabled &&
  css`
    border-color: #eae7e2;
    background-color: ${active ? `#EAE7E2` : `#F9F9F9`};
    color: #eae7e2;
  `}
  &:hover,
  &:focus {
    ${!disabled &&
    css`
      border-color: #76dafe;
      background-color: ${active ? `#76DAFE` : `#F9F9F9`};
    `}
  }
  &:nth-last-child(1) {
    margin-right: 0.5ch;
  }
`;

export const Checkbox = styled(Action).attrs({
  forwardedAs: BaseCheckbox
})<ToggleStyles & IsActive>(
  ({ name, value, values, errors, disabled }) => css`
    ${toggleStyles({
      active: isActive({ name, values, value }),
      disabled,
      valid: isValid({ name, errors })
    })}
    border-radius: 0.25ch;
  `
);

export const Radio = styled(Action).attrs({
  forwardedAs: BaseRadio
})<ToggleStyles & IsActive>(
  ({ name, value, values, errors, disabled }) => css`
    ${toggleStyles({
      active: isActive({ name, values, value }),
      disabled,
      valid: isValid({ name, errors })
    })}
    border-radius: 1ch;
  `
);

export const Toggle = styled(Action).attrs({ forwardedAs: BaseCheckbox })(
  () => css``
);

export const Label = styled(BaseLabel)(() => css``);

export const Message = styled(BaseMessage)(() => css``);

export const Remove = styled(Button).attrs({
  forwardedAs: BaseRemove
})(() => css``);

export const Push = styled(Button).attrs({
  forwardedAs: BasePush
})(() => css``);

export const Submit = styled(Button).attrs({
  forwardedAs: BaseSubmit
})(() => css``);
