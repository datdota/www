import type React from "react";
import styled, { css } from "styled-components";
import { unstable_FormLabel as BaseLabel } from "reakit";

interface LabelProps extends React.ComponentProps<typeof BaseLabel> {
  active?: boolean;
  disabled?: boolean;
  valid?: boolean;
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
}

export const Label = styled(BaseLabel)<LabelProps>(
  ({ active = false, disabled = false, valid = false }) => css`
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: calc(2.8rem * 0.75);
    color: ${valid ? `#000` : `#D9027D`};
    cursor: pointer;
    user-select: none;
    ${disabled &&
    css`
      border-color: #d7d4cd;
      color: #d7d4cd;
    `}
    &:hover, &:focus {
      ${!disabled &&
      css`
        color: #000;
        span {
          border-color: ${active ? `#76DAFE` : `#000`};
          background-color: ${active && `#76DAFE`};
        }
      `}
    }
    &:last-child {
      margin-bottom: 0;
    }
  `
);

interface InputProps {
  name: string;
  value: string | undefined;
}

export const Input = styled.input<InputProps>(
  () => css`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  `
);

export const Span = styled.span<{ disabled?: boolean; valid?: boolean }>(
  () => css``
);
