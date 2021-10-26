import React from "react";
import type { LinkProps as NextLinkProps } from "next/link";
import { default as NextLink } from "next/link";

export interface LinkProps {
  // eslint-disable-next-line quotes
  to?: NextLinkProps["href"];
  // eslint-disable-next-line quotes
  href?: NextLinkProps["href"];
  external?: boolean;
  onClick?: React.MouseEventHandler;
  // Google Analytics Props
  target: string;
  eventCategory: string;
  eventAction: string;
  eventLabel: string;
  eventValue: number;
}

const isExternal = /^(?:[a-z]+:)?\/\//i;

const email =
  // eslint-disable-next-line
  /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;

const phone = /^\+\d{11,15}$/;

const getProtocol = (link: string): string => {
  switch (true) {
    case email.test(link):
      return `mailto:${link}`;
    case phone.test(link):
      return `tel:${link}`;
    default:
      return link;
  }
};

export const Link: React.FC<LinkProps> = ({
  // eslint-disable-next-line no-undefined
  to = undefined,
  // eslint-disable-next-line no-undefined
  href = undefined,
  external = (to || href) && isExternal.test((to ?? href) as string),
  onClick,
  children,
  target,
  eventCategory,
  eventAction,
  eventLabel,
  eventValue,
  ...props
}) => {
  if (external) {
    return (
      <a
        href={getProtocol((to ?? href) as string)}
        {...props}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <NextLink href={(to ?? href) as string} {...props}>
      {children}
    </NextLink>
  );
};
