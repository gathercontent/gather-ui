import * as React from 'react';

export function CardFooter({ children, className = '', ...rest }) {
  return (
    <div className={`card-footer ${className}`} {...rest}>
      {children}
    </div>
  );
}
