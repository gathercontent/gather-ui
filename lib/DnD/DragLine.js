import React, { Fragment } from 'react';
import { string, number } from 'prop-types';

export const DragLine = ({ alignment, offsetPx }) => (
  <Fragment>
    <span
      className="drag-line__ball drag-line__ball-left"
      style={{
        [alignment]: `${-5 - offsetPx}px`
      }}
    />
    <span
      className="drag-line"
      style={{
        [alignment]: `${-3 - offsetPx}px`
      }}
    />
    <span
      className="drag-line__ball drag-line__ball-right"
      style={{
        [alignment]: `${-5 - offsetPx}px`
      }}
    />
  </Fragment>
);

DragLine.propTypes = {
  alignment: string.isRequired,
  offsetPx: number
};

DragLine.defaultProps = {
  offsetPx: 0
};
