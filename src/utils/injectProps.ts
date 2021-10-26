import type React from "react";
import { Children, cloneElement, isValidElement } from "react";

export const injectProps = <P = {}>(
  nodes: React.ReactNode,
  props: P
): React.ReactNode =>
  Children.map(nodes, (child) => {
    if (isValidElement(child)) {
      return cloneElement(Children.only(child), {
        ...props,
        // eslint-disable-next-line no-undefined
        key: Array.isArray(nodes) ? child.props.name : undefined
      });
    }
    return child;
  });
