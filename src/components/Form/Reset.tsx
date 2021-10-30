import React from "react";
import type { unstable_FormStateReturn as FormStateReturn } from "reakit/Form";
import type { ButtonProps } from "../Button";
import { Button } from "../Button";

interface ResetProps extends ButtonProps {
  reset?: FormStateReturn<any>["reset"];
}

export const Reset: React.FC<ResetProps> = ({ reset, ...props }) => (
  <Button type="reset" onClick={reset} {...props} />
);
