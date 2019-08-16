import React from 'react';
import { bool, node } from 'prop-types';

function FolderRowInner({ children }) {
  return <div className="folder-row__inner">{children}</div>;
}

FolderRowInner.propTypes = {
  children: node.isRequired
};

export { FolderRowInner };