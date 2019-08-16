import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  WindowingProvider,
  InViewList,
  InViewListItem,
  ItemRow
} from '../../index';

storiesOf('Components', module).add('Windowing', () => {
  const items = [...new Array(1000)].map((i, index) => ({
    id: index + 1
  }));

  return (
    <WindowingProvider
      style={{ overflow: 'scroll', position: 'relative', height: '500px' }}
      itemsLength={items.length}
      itemHeight={50}
      offset={20}
    >
      <InViewList items={items} itemHeight={50}>
        {({ itemsInView }) =>
          itemsInView.map((i, index) => (
            <InViewListItem key={i.id} index={index}>
              <ItemRow bordered>
                <ItemRow.Name>hello world {i.id}</ItemRow.Name>
              </ItemRow>
            </InViewListItem>
          ))
        }
      </InViewList>
    </WindowingProvider>
  );
});