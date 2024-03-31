import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';

export function Panel({ children, className, ...rest }: React.PropsWithChildren<HTMLAttributes<HTMLElement>>) {
  const finalClassNames = classNames(
    'border rounded p-3 shadow bg-white w-full',
    className
  );

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel;
