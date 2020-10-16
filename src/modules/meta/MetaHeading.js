import React from 'react';
import { node } from "prop-types";
import { useClassNames } from "../../hooks/useClassNames";

function MetaHeading({ children, ...props }) {
  const classNames = useClassNames(
    'meta-heading text-base text-neutral-20 font-semi-bold mb-1',
    props
  );

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}

MetaHeading.propTypes = {
  children: node.isRequired,
};

export { MetaHeading };
