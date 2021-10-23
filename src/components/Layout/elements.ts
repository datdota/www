import styled, { css } from "styled-components";

export const Main = styled.main(
  () => css`
    position: relative;
    display: grid;
    grid-template:
      "navigation content" 1fr
      "navigation footer" 40px
      / 220px minmax(0, 100%);
    width: 100%;
    max-width: 100vw;
    min-height: 100vh;
    margin: 0 auto;
    box-sizing: border-box;
  `
);

export const Content = styled.article(
  () => css`
    grid-area: content;
    display: flex;
    flex-direction: column;
    width: 100%;
  `
);
