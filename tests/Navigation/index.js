import { Dropdown } from 'react-bootstrap';
import { React, mount } from '../setup';
import Navigation from '../../lib/Navigation';

describe('Navigation', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Navigation>
        <Dropdown.Item href="#" active>
          Items
        </Dropdown.Item>
        <Dropdown.Item href="#">Archived Items</Dropdown.Item>
      </Navigation>
    );
  });

  test('renders 2 Dropdown.Items', () => {
    expect(wrapper.find(Dropdown.Item)).toHaveLength(2);
  });

  test('adds the tabs modifier class', () => {
    wrapper.setProps({
      tabs: true
    });
    expect(wrapper.find('.navigation--tabs')).toHaveLength(1);
  });

  test('applies navigation__item to both Dropdown.Items', () => {
    expect(wrapper.find('.navigation__item').hostNodes()).toHaveLength(2);
  });

  test('applies navigation__item--active to both 1 Dropdown.Items', () => {
    expect(wrapper.find('.navigation__item--active').hostNodes()).toHaveLength(
      1
    );
  });
});
