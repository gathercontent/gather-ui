import React from 'react';
import { node, string } from 'prop-types';

function ButtonLink({ children, className, ...rest }) {
  return (
    <button
      type="button"
      className={`${className} bg-transparent border-0 hover:underline focus:outline-none rounded`}
      {...rest}
    >
      {children}
    </button>
  );
}

ButtonLink.propTypes = {
  children: node.isRequired,
  className: string
};

ButtonLink.defaultProps = {
  className: ''
};

export { ButtonLink };
