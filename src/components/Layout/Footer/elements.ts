import styled, { css } from "styled-components";

export const Container = styled.footer(
  () => css`
    grid-area: footer;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    border-top: 1px solid #e7eaec;
    font-size: 1.3rem;
  `
);

export const Link = styled.a.attrs({
  target: `_blank`,
  rel: `noopener noreferrer`
})(() => css``);

export const Left = styled.div(() => css``);

export const Right = styled.div(() => css``);
