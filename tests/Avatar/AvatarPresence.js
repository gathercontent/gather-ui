import { React, expect, sinon, mount } from '../setup';
import Avatar from '../../lib/Avatar';
import AvatarPresenceGroup from '../../lib/AvatarGroup';

describe('Avatar/Presence', () => {
  let wrapper;
  let showMoreSpy;

  beforeEach(() => {
    showMoreSpy = sinon.spy(AvatarPresenceGroup.prototype, 'showMore');
    wrapper = mount(
      <AvatarPresenceGroup maximum={3}>
        <Avatar email="poppycox@gmail.com" onlyInitials isAssigned fadedOut initials="MR" name="Mike Rotch" />
        <Avatar email="hugh@gmail.com" onlyInitials fadedOut initials="HJ" name="Hugh Jass" />
        <Avatar email="la@gmail.com" onlyInitials fadedOut initials="FD" name="Fedra Droid" />
        <Avatar email="la@gmail.com" onlyInitials fadedOut initials="KM" name="Kann Schemll" />
    </AvatarPresenceGroup>
    );
  });

  afterEach(() => {
    showMoreSpy.restore();
  });

  it('renders an AvatarGroup component', () => {
    expect(wrapper.find('[data-component="avatar-group"]')).to.have.length(1);
  });

  it('renders the maximum specified size of individual Avatar components', () => {
    expect(wrapper.find(Avatar).length).to.equal(3);
  });

  it('renders a custom maximum specified size of individual Avatar components', () => {
    const customWrapper = mount(
      <AvatarPresenceGroup maximum={1}>
        <Avatar email="poppycox@gmail.com" onlyInitials isAssigned fadedOut initials="MR" name="Mike Rotch" />
        <Avatar email="hugh@gmail.com" onlyInitials fadedOut initials="HJ" name="Hugh Jass" />
        <Avatar email="la@gmail.com" onlyInitials fadedOut initials="FD" name="Fedra Droid" />
        <Avatar email="la@gmail.com" onlyInitials fadedOut initials="KM" name="Kann Schemll" />
    </AvatarPresenceGroup>);

    expect(customWrapper.find(Avatar).length).to.equal(1);
  });

  it('renders an extra component displaying the amount of people not shown', () => {
    const showMore = wrapper.find('[data-component="show-more-avatar"]');
    expect(showMore).to.have.length(1);
    expect(showMore.text()).to.equal('+1');
  });

  it('renders the remaining avatars once clicked on "Show more"', () => {
    const showMore = wrapper.find('[data-component="show-more-avatar"]');
    showMore.simulate('click');
    expect(wrapper.state().showExtra).to.equal(true);
    expect(showMoreSpy).to.have.been.called;
  });

  it('renders the initials for an Avatar when the prop is enabled', () => {
    const first = wrapper.find(Avatar).first();
    expect(first.find('.avatar__initials').length).to.equal(1);
    expect(first.find('.avatar__initials').text()).to.equal('MR');
  });
});
