import { React, shallow } from '../setup';
import { UserSearchDropdown } from '../../lib';
import TagUserFormUsers from '../../lib/TagUserForm/Users/TagUserFormUsers';
import TagUserFormUser from '../../lib/TagUserForm/Users/TagUserFormUser';

describe('Tag User Form Users', () => {
  let wrapper;
  let addUserSpy;
  let removeUserSpy;

  const users = [
    { name: 'mr waffle', display: 'waffle', id: 1 },
    { name: 'mr doughnut', display: 'doughnut', id: 2 },
    { name: 'mr bagels', display: 'bagels', id: 3 }
  ];

  beforeEach(() => {
    addUserSpy = jest.fn();
    removeUserSpy = jest.fn();
    wrapper = shallow(
      <TagUserFormUsers
        users={users}
        addedUsers={[]}
        lockedUsers={[]}
        dropdownAutoPosition
        addUser={addUserSpy}
        removeUser={removeUserSpy}
        lockedUserTooltip="text!"
      />
    );
  });

  test('renders a UserSearchDropdown (with correct props)', () => {
    expect(wrapper.find(UserSearchDropdown).prop('users')).toEqual(users);
    expect(wrapper.find(UserSearchDropdown).prop('displayEmail')).toEqual(true);
    expect(
      wrapper.find(UserSearchDropdown).prop('dropdownAutoPosition')
    ).toEqual(true);
    expect(wrapper.find(UserSearchDropdown).prop('addUser')).toEqual(
      addUserSpy
    );
  });

  test('renders the correct amount of TagUserFormUser', () => {
    expect(wrapper.find(TagUserFormUser)).toHaveLength(0);
    wrapper.setProps({ lockedUsers: [users[0]] });
    expect(wrapper.find(TagUserFormUser)).toHaveLength(1);
    expect(wrapper.find(TagUserFormUser).prop('user')).toEqual(users[0]);
    expect(wrapper.find(TagUserFormUser).prop('isLocked')).toEqual(true);
    expect(wrapper.find(TagUserFormUser).prop('lockedUserTooltip')).toEqual(
      'text!'
    );

    wrapper.setProps({ addedUsers: [users[2]] });
    expect(wrapper.find(TagUserFormUser)).toHaveLength(2);
    expect(
      wrapper
        .find(TagUserFormUser)
        .last()
        .prop('user')
    ).toEqual(users[2]);
    expect(
      wrapper
        .find(TagUserFormUser)
        .last()
        .prop('isLocked')
    ).toEqual(false);
    expect(
      wrapper
        .find(TagUserFormUser)
        .last()
        .prop('removeUser')
    ).toEqual(removeUserSpy);
  });
});
