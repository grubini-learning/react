import React, { ButtonHTMLAttributes } from 'react';

import { twMerge } from 'tailwind-merge'
import className from 'classnames';

type ExcludeFromTuple<T extends any[], U> = {
    [K in keyof T]: T[K] extends U ? never : T[K];
  }[number];
   
  type Exclusive<T extends PropertyKey[], U = any> = T[number] extends infer E
    ? E extends string
      ? Record<E, U> & { [k in ExcludeFromTuple<T, E>]?: never }
      : never
    : never & {};

type Props = React.PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & Exclusive<["primary", "secondary", "success", "warning", "danger"], boolean> & 
             Partial<{ 
                outline?: boolean;
                rounded?: boolean; 
             }>;

export const Button: React.FC<Props> = ({children, danger, outline, rounded, primary, secondary, success, warning, ...rest}) => {
    const {className: cn , ...props} = rest;

    const classes = twMerge(className(
        'px-3 py-1.5 border flex justify-center items-center gap-x-2',
        cn,
        {   
            'border-red-500 bg-red-500/75 hover:bg-red-300 text-white': danger,
            'border-blue-500 bg-blue-500/75 hover:bg-blue-300 text-white': primary,
            'border-gray-500 bg-gray-500/75 hover:bg-gray-300 text-white': secondary,
            'border-green-500 bg-green-500 hover:bg-lime-400 text-white active:bg-green-600': success,
            'border-yellow-500 bg-yellow-500/75 hover:bg-yellow-300 text-white': warning,
            'rounded-full': rounded,
            'bg-white': outline,
            'text-blue-500': outline && primary,
            'text-gray-500': outline && secondary,
            'text-green-500': outline && success,
            'text-yellow-500': outline && warning,
            'text-red-500': outline && danger,
        },
    ));
    

    return <button {...props} className={classes}>{children}</button>
};

export default Button;