import React from "react";
import type { LinkProps } from "../Link";
import { Link } from "../Link";
import { Base, ButtonIcon } from "./elements";

export interface ButtonProps
  extends LinkProps,
    React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  type?: HTMLButtonElement["type"];
  Icon?: React.ElementType;
  danger?: boolean;
  secondary?: boolean;
  onClick?: React.MouseEventHandler;
}

export const Button: React.FC<ButtonProps> = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ Icon, children, ...props }, ref) => (
  <Base
    {...(props.to || props.href
      ? {
          forwardedAs: (props.to ? Link : `a`) as unknown as undefined,
          ...props
        }
      : props)}
    ref={ref}
  >
    {Icon && (
      <ButtonIcon>
        <Icon />
      </ButtonIcon>
    )}
    {children}
  </Base>
));

Button.displayName = `Button`;
