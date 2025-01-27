import {InputHTMLAttributes, Ref} from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  ref?: Ref<HTMLInputElement>;
};
