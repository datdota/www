import styled, { css } from "styled-components";

export const Title = styled.h1(
  () => css`
    width: 100%;
    text-align: center;
  `
);

export const Center = styled.div`
  display: flex;
  justify-content: center;
`;

export const ModalContent = styled.div`
  width: 80ch;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  font-size: 1.6rem;
`;

export const TwoColumn = styled.div`
  display: grid;
  grid-template: "column1 column2";
  grid-template-columns: 1fr 1fr;
  grid-gap: 2ch;
`;
