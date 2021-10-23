import styled, { css } from "styled-components";

export const Container = styled.nav(
  () => css`
    grid-area: navigation;
    display: flex;
    flex-direction: column;
    background-color: #2f4050;
  `
);

export const Header = styled.header(
  () => css`
    display: flex;
    justify-content: center;
    padding: 33px 25px;
    background-color: #26384a;
  `
);

export const NavList = styled.ul(
  () => css`
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
  `
);
