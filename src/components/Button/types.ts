import {AnchorHTMLAttributes, ButtonHTMLAttributes} from "react";

export type ButtonCommonProps = {
  variant?: 'primary' | 'secondary';
};

export type AsButtonProps = ButtonCommonProps & ButtonHTMLAttributes<HTMLButtonElement> & ({
  element?: 'button';
});

export type AsLinkProps = ButtonCommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  element: 'a';
};

export type ButtonProps = AsButtonProps | AsLinkProps;
