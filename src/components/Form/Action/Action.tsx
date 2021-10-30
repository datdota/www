import React from "react";
import type { unstable_FormStateReturn as FormState } from "reakit/Form";
import { Label, Input, Span } from "./elements";
import { isActive } from "./isActive";
import { isValid } from "./isValid";

export interface ActionProps extends Partial<FormState<Record<any, any>>> {
  as?: React.ElementType;
  group?: boolean;
  name?: string;
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  disabled?: boolean;
}

export const Action: React.FC<ActionProps> = ({
  as,
  group = false,
  className,
  style,
  name,
  value,
  children,
  ...props
}) => {
  const { values, errors } = props;
  const active = isActive({ name, values, value });
  const valid = isValid({ name, value, group, errors });

  return (
    <Label
      as={group ? `label` : undefined /* eslint-disable-line no-undefined */}
      name={name}
      {...props}
      active={active}
      valid={valid}
    >
      <Input as={as} name={name} value={value} {...props} valid={valid} />
      <Span
        disabled={props.disabled}
        className={className}
        style={style}
        valid={valid}
      />
      {children}
    </Label>
  );
};
