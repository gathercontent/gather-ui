import { React, mount } from '../setup';
import { TagUserForm, ExpandingTextArea } from '../../lib';
import TagUserFormActions from '../../lib/TagUserForm/TagUserFormActions';
import TagUserFormUsers from '../../lib/TagUserForm/Users/TagUserFormUsers';

describe('Tag User Form', () => {
  let wrapper;
  let onSubmitSpy;
  let onCancelSpy;
  let onInputChangeSpy;

  jest.useFakeTimers();

  beforeEach(() => {
    onSubmitSpy = jest.fn();
    onCancelSpy = jest.fn();
    onInputChangeSpy = jest.fn();
    wrapper = mount(
      <TagUserForm
        placeholder="text"
        onSubmit={onSubmitSpy}
        onCancel={onCancelSpy}
        onInputChange={onInputChangeSpy}
        users={[]}
      />
    );
  });


  test('calls props.onSubmit', () => {
    wrapper.find('form').simulate('submit');
    expect(onSubmitSpy).toHaveBeenCalledTimes(1);
  });

  test('renders TagUserFormUsers (with correct props)', () => {
    wrapper.setProps({ users: [{ name: 'mr waffle', display: 'waffle' }] });
    wrapper.setProps({
      lockedUsers: [{ name: 'mr bagels', display: 'bagels' }]
    });
    const users = wrapper.find(TagUserFormUsers);
    expect(users).toHaveLength(1);
    expect(users.prop('users')).toEqual([
      { name: 'mr waffle', display: 'waffle' }
    ]);
    expect(users.prop('lockedUsers')).toEqual([
      { name: 'mr bagels', display: 'bagels' }
    ]);
  });

  test('renders ExpandingTextArea (with correct props)', () => {
    let input = wrapper.find(ExpandingTextArea);
    expect(input).toHaveLength(1);
    expect(input.prop('focusOnMount')).toEqual(false);
    expect(input.prop('value')).toEqual('');

    input = wrapper.find(ExpandingTextArea);
    expect(input.prop('setValue')).toEqual(true);
    expect(input.prop('minRows')).toEqual(3);
  });

  test('renders TagUserFormActions (with correct props)', () => {
    wrapper.setProps({ value: 'test' });
    const actions = wrapper.find(TagUserFormActions);
    expect(actions).toHaveLength(1);
  });

  test('filters already added users user', () => {
    const users = [
      { name: 'mr waffle', display: 'waffle', id: 1 },
      { name: 'mr doughnut', display: 'doughnut', id: 2 },
      { name: 'mr bagels', display: 'bagels', id: 3 }
    ];
    wrapper.setProps({ users });
    wrapper.setProps({ lockedUsers: [users[0]] });
    let usersComponent = wrapper.find(TagUserFormUsers);
    expect(usersComponent.prop('users')).toEqual([users[1], users[2]]);
  });
});
