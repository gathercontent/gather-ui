import React from 'react';
import { ItemRow } from '../../ItemRow';
import { Draggable } from '../Draggable';

function ItemDndMock({ children }) {
  const preview = (
    <div style={{ maxWidth: '300px' }}>
      <ItemRow bordered>{children}</ItemRow>
    </div>
  );

  return (
    <Draggable item={{ type: 'item' }} preview={preview}>
      {({ isDragging }, dragRef) => (
        <div ref={dragRef}>
          <ItemRow
            bordered
            style={{
              opacity: isDragging ? '.5' : '1'
            }}
            className="h-margin-top-half"
          >
            {children}
          </ItemRow>
        </div>
      )}
    </Draggable>
  );
}

ItemDndMock.propTypes = ItemRow.propTypes;

export { ItemDndMock };
