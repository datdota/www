import type React from "react";
import styled, { css } from "styled-components";
import { Button } from "reakit/Button";

export interface StyleProps {
  disabled?: boolean;
  danger?: boolean;
  secondary?: boolean;
}

const getBorderColor = ({
  disabled = false,
  secondary = false,
  danger = false
}: StyleProps): string => {
  switch (true) {
    case disabled:
      return `#D7D4CD`;
    case danger:
      return `#D9027D`;
    case secondary:
      return `#56534F`;
    default:
      return `#00A3E0`;
  }
};

const getBackgroundHoverColor = ({
  disabled = false,
  secondary = false,
  danger = false
}: StyleProps): string => {
  switch (true) {
    case disabled:
      return `transparent`;
    case danger:
      return `#D9027D`;
    case secondary:
      return `#56534F`;
    default:
      return `#00A3E0`;
  }
};

const getHoverColor = ({
  disabled = false,
  danger = false,
  secondary = false
}: StyleProps): string => {
  switch (true) {
    case disabled:
      return `#D7D4CD`;
    case danger:
      return `#fff`;
    case secondary:
      return `#fff`;
    default:
      return `#fff`;
  }
};

export const buttonStyles = ({
  disabled = false
}: StyleProps): ReturnType<typeof css> => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 24ch;
  padding: calc((2.8rem * 0.75) / 2) 1.5ch;
  border: none;
  border: 0.1rem solid ${getBorderColor};
  background-color: transparent;
  box-sizing: border-box;
  overflow: hidden;
  color: ${getBorderColor};
  font-weight: 400;
  font-size: 2.8rem;
  font-style: italic;
  white-space: nowrap;
  text-align: center;
  text-decoration: none;
  text-overflow: ellipsis;
  transition: 0.3s ease all;
  user-select: none;
  outline: none;
  ${!disabled &&
  css`
    cursor: pointer;
  `};
  -webkit-appearance: inherit !important;
  &:focus {
    outline: none;
  }
  &:hover,
  &:focus {
    background-color: ${getBackgroundHoverColor};
    color: ${getHoverColor};
  }
`;

export interface BaseProps {
  disabled?: boolean;
  danger?: boolean;
  secondary?: boolean;
  children?: React.ReactNode;
}

export const Base = styled(Button)<BaseProps>(buttonStyles);

export const ButtonIcon = styled.span(
  () => css`
    display: inline-flex;
    align-items: center;
    padding-right: 0.5rem;
    font-size: 2.8rem;
  `
);
