import React from 'react';
import { node, string } from 'prop-types';

function TabsActionGroup({ children, className }) {
  return <div className={`absolute right-0 mr-4 ${className}`}>{children}</div>;
}

export { TabsActionGroup };

TabsActionGroup.propTypes = {
  children: node.isRequired,
  className: string
};

TabsActionGroup.defaultProps = {
  className: ''
};