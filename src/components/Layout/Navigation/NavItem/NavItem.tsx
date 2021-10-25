import React, { Children, cloneElement, isValidElement } from "react";
import type { LinkProps } from "next/link";
import { FaChevronLeft, FaChevronDown } from "react-icons/fa";
import type { AccordionStateReturn } from "@renderlesskit/react";
import { AccordionPanel } from "@renderlesskit/react";
import { Button } from "reakit";
import { Label, List, Item } from "./elements";

export interface NavItemProps extends AccordionStateReturn {
  icon: React.ElementType;
  label: string;
  children: React.ReactElement<LinkProps> | React.ReactElement<LinkProps>[];
}

export const NavItem = ({
  icon: Icon,
  label,
  children,
  ...props
}: NavItemProps): React.ReactElement => (
  <li>
    <Label {...props}>
      {(labelProps): React.ReactElement => (
        <Button {...labelProps}>
          <Icon />
          {label}
          {labelProps[`aria-expanded`] ? <FaChevronDown /> : <FaChevronLeft />}
        </Button>
      )}
    </Label>
    <AccordionPanel {...props}>
      {(listProps): React.ReactElement => (
        <List {...listProps}>
          {Children.map(children, (child) => {
            if (isValidElement<LinkProps>(child)) {
              return (
                // eslint-disable-next-line @typescript-eslint/no-base-to-string
                <Item key={child.props.href.toString()}>
                  {cloneElement(Children.only(child))}
                </Item>
              );
            }
            return child;
          })}
        </List>
      )}
    </AccordionPanel>
  </li>
);
