import React from "react";
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaMedium,
  FaSteam,
  FaTwitter
} from "react-icons/fa";
import { Container, Left, Right, Link } from "./elements";

export const Footer: React.VFC = () => (
  <Container>
    <Left>
      <strong>Copyright</strong>
      {` datdota © 2021 | Follow us! `}
      <Link href="https://twitter.com/datdota">
        <FaTwitter />
      </Link>
      {` `}
      <Link href="https://www.facebook.com/datdota">
        <FaFacebook />
      </Link>
      {` `}
      <Link href="https://discord.gg/datdota">
        <FaDiscord />
      </Link>
      {` `}
      <Link href="https://medium.com/datdota/latest">
        <FaMedium />
      </Link>
      {` `}
      <Link href="https://github.com/datdota/www">
        <FaGithub />
      </Link>
      {` | Powered by `}
      <Link href="https://store.steampowered.com/software/">
        <FaSteam />
      </Link>
      {` | Parsing `}
      <Link href="https://github.com/skadistats/clarity/">{`clarity`}</Link>
      {` & `}
      <Link href="https://github.com/ButterflyStats/butterfly">{`butterfly`}</Link>
      {` | `}
    </Left>
    <Right>
      <strong>94673</strong> total matches. <strong>18627</strong> teams.{` `}
      <strong>4794</strong> leagues. <strong>9366606</strong> rating points.
      {` `}
      <strong>13556400</strong> data frames.
    </Right>
  </Container>
);
