import React from "react";
import { Content, Main } from "./elements";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";

export const Layout: React.FC = ({ children }) => (
  <Main>
    <Navigation />
    <Content>{children}</Content>
    <Footer />
  </Main>
);
