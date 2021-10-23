import React from "react";
import { default as Link } from "next/link";
import { FaTrophy } from "react-icons/fa";
import { Accordion, useAccordionState } from "@renderlesskit/react";
import { Container, Header, NavList } from "./elements";
import { NavItem } from "./NavItem";

export const Navigation: React.VFC = () => {
  const state = useAccordionState({ allowToggle: true });
  return (
    <Container>
      <Header>
        <Link href="/">
          <img
            alt="Home"
            src="http://api.datdota.com/images/logos/datdota_logo_medium.png"
            height="63"
            width="156"
          />
        </Link>
      </Header>
      <Accordion {...state}>
        {(accordionProps): React.ReactElement => (
          <NavList {...accordionProps}>
            <NavItem icon={FaTrophy} label={`Leagues`} {...state}>
              <Link href="/leagues">All</Link>
              <Link href="/leagues/valve-only">Valve Only</Link>
              <Link href="/leagues/pedigrees">LAN Pedigrees</Link>
            </NavItem>
          </NavList>
        )}
      </Accordion>
    </Container>
  );
};
