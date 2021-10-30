import type React from "react";

export type IsRenderFunction<T> = T extends (...args: any[]) => React.ReactNode
  ? T
  : never;

export const isRenderFunction = <T extends {}>(
  value?: T
): value is IsRenderFunction<T> => typeof value === `function`;
