import styled, { css } from "styled-components";

export const Backdrop = styled.div(
  () => css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  `
);

export const Container = styled.div(
  () => css`
    margin: 2rem;
  `
);
