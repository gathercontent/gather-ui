import { Dropdown } from 'react-bootstrap/lib';
import { React, shallow } from '../setup';
import { DropdownSwitcher } from '../../lib';

describe('DropdownSwitcher', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DropdownSwitcher title="Test Title" />);
  });

  afterEach(() => {});

  test('renders its title', () => {
    expect(wrapper.find('.dropdown-switcher__header').text()).toBe(
      'Test Title<Icon />'
    );
  });

  test('renders a custom element title', () => {
    const title = <h1 className="page__title">Project Name</h1>;
    wrapper.setProps({
      title
    });
  });

  test('renders a dropdown when a menu is supplied', () => {
    const menu = (
      <Dropdown.Menu className="dropdown__menu dropdown-menu--arrowed">
        <Dropdown.Item href="#" eventKey="1">
          Items
        </Dropdown.Item>
        <Dropdown.Item divider />
        <Dropdown.Item disabled eventKey="2">
          Archived Items
        </Dropdown.Item>
      </Dropdown.Menu>
    );

    wrapper.setProps({
      children: menu
    });

    expect(wrapper.find(Dropdown.Menu)).toHaveLength(1);
    expect(wrapper.find(Dropdown.Item)).toHaveLength(3);
  });
});
