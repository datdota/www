import styled, { css } from "styled-components";
import { Group } from "reakit";

export const FieldSet = styled(Group)(
  () => css`
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    margin-bottom: calc(2.8rem * 0.75);
    padding: 0;
    border: 0;
    box-sizing: border-box;
    &:last-child {
      margin-bottom: 0;
    }
    &:focus {
      outline: none;
    }
  `
);
