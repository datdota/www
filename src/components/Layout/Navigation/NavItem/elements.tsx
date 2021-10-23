import styled, { css } from "styled-components";
import { AccordionTrigger } from "@renderlesskit/react";

export const Label = styled(AccordionTrigger)(
  () => css`
    display: grid;
    grid-template: "icon text toggle" / 1fr minmax(0, 100%) 1fr;
    width: 100%;
    padding: 14px 20px 14px 25px;
    margin: 0;
    border: none;
    background: none;
    border-left: 4px solid;
    border-color: #2f4050;
    color: #a7b1c2;
    font-size: 1.3rem;
    font-weight: 600;
    text-align: left;
    text-decoration: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &[aria-expanded="true"],
    &:hover,
    &:focus {
      color: #ffffff;
      background-color: #293846;
    }

    &[aria-expanded="true"] {
      border-color: #19aa8d;
    }

    &:hover,
    &:focus {
      &::not([aria-expanded="true"]) {
        border-color: #293846;
      }
    }

    svg:first-child {
      margin-right: 12px;
    }

    svg:last-child {
      justify-self: flex-end;
    }
  `
);

// AccordionPanel has a transient prop we need to filter
// https://styled-components.com/docs/api#transient-props
export const List = styled.ul(
  () => css`
    display: flex;
    flex-direction: column;
    padding: 0;
    padding-bottom: 10px;
    background-color: #293846;
    border-left: 4px solid #19aa8d;
  `
);

export const Item = styled.li(
  () => css`
    display: flex;
    padding: 7px 10px 7px 52px;

    a {
      color: #a7b1c2;
      font-size: 1.3rem;
      font-weight: 600;

      &:hover {
        color: white;
      }
    }
  `
);
