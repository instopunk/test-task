import {AnchorHTMLAttributes, ButtonHTMLAttributes, FC} from 'react';
import {getClassList} from "@/utils/getClassList";
import {ButtonProps} from './types';
import styles from './styles/styles.module.scss';

/**
 * Компонент Button
 */
export const Button: FC<ButtonProps> = ({ children, className, variant = 'primary', element = 'button', ...rest }) => {

  const classList = getClassList([
    className,
    styles['button'],
    styles[`button--${variant}`],
  ]);

  if(element === 'a'){
    const linkRest = rest as AnchorHTMLAttributes<HTMLAnchorElement>;

    return (
      <a
        className={classList}
        {...linkRest}
      >
        {children}
      </a>
    )
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      className={classList}
      {...buttonRest}
    >
      {children}
    </button>
  );
};
