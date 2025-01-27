import {FC} from 'react';
import {getClassList} from "@/utils/getClassList";

import {InputProps} from './types';
import styles from './styles/styles.module.scss';

/**
 * Компонент Input
 */
export const Input: FC<InputProps> = ({value, type, className, ref, ...rest}) => {

  const classList = getClassList([
    className,
    styles['input'],
  ]);

  return (

    <input
      ref={ref}
      className={classList}
      value={type === 'password' ? undefined : value}
      type={type}
      {...rest}
    />
  );
};
