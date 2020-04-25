import { React, mount } from '../setup';
import { Button, Icon, Dropdown } from '../../lib';
import ConfirmationDropdownContent from '../../lib/ConfirmationDropdown/ConfirmationDropdownContent';
import { GATHER_UI_DROPDOWN } from '../../lib/Dropdown/consts';

describe('Confirmation Dropdown Content', () => {
  let wrapper;
  const onConfirmSpy = jest.fn();
  const setShowContentSpy = jest.fn();
  const onHideSpy = jest.fn();
  const onCancelSpy = jest.fn();

  const dropdownContent = (
    <div className="dropdown-content">Dropdown content!</div>
  );

  const mockConfirmPromise = () =>
    new Promise(resolve => {
      resolve();
      onConfirmSpy();
    });

  beforeEach(() => {
    wrapper = mount(
      <ConfirmationDropdownContent
        onConfirm={mockConfirmPromise}
        onHide={onHideSpy}
        onCancel={onCancelSpy}
        top
        onCompletion={() => {}}
      >
        {dropdownContent}
      </ConfirmationDropdownContent>,
      {
        context: {
          [GATHER_UI_DROPDOWN]: {
            setShowContent: setShowContentSpy,
            showContent: true
          }
        }
      }
    );
  });

  test('rendering dropdown content', () => {
    expect(
      wrapper.find(Dropdown.Content).find('.dropdown-content')
    ).toHaveLength(1);
  });

  test('adds an is-danger type to the confirm button', () => {
    expect(
      wrapper
        .find(Dropdown.Content)
        .find(Button)
        .first()
        .prop('types')
    ).toEqual(['slim', 'collapse', 'link-default']);
    wrapper.setProps({ isDanger: true });

    expect(
      wrapper
        .find(Dropdown.Content)
        .find(Button)
        .first()
        .prop('types')
    ).toEqual(['slim', 'collapse', 'link-danger']);
  });

  test('rendering a confirmation button', () => {
    const { clickHandler, children } = wrapper
      .find(Button)
      .first()
      .props();
    expect(children).toEqual('Confirm');
    return clickHandler().then(() => {
      expect(onConfirmSpy).toHaveBeenCalledTimes(1);
      expect(setShowContentSpy).toHaveBeenCalledWith(false);
    });
  });

  test('rendering a cancel button', () => {
    const { types, clickHandler, children } = wrapper
      .find(Button)
      .last()
      .props();
    expect(types).toEqual(['slim', 'collapse']);
    expect(children).toEqual('Cancel');
    clickHandler();
    expect(setShowContentSpy).toHaveBeenCalledWith(false);
    expect(onHideSpy).toHaveBeenCalledTimes(1);
    expect(onCancelSpy).toHaveBeenCalledTimes(1);
  });

  test('renders a loader whilst the promise is pending', () => {
    expect(wrapper.find(Icon).prop('name')).toEqual('loader');
    wrapper.setProps({ promiseIsPending: true });
    expect(wrapper.find(Icon).prop('name')).toEqual('loader');
  });

  test('spreading props over the content', () => {
    expect(wrapper.find(Dropdown.Content).prop('top')).toEqual(true);
  });
});
