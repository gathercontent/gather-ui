import { React, mount } from '../../setup';
import CommentForm from '../../../lib/Conversation/CommentForm';
import CommentFormActions from '../../../lib/Conversation/CommentForm/CommentFormActions';
import Avatar from '../../../lib/Avatar/index';
import ShortcutTrigger from '../../../lib/ShortcutTrigger/index';
import CommentFormInput from '../../../lib/Conversation/CommentForm/CommentFormInput';

describe('Comment Form', () => {
  let wrapper;
  let onSubmitSpy;
  let onCancelSpy;
  let onCommentChangeSpy;
  const onRowCountChange = () => {};

  const props = {
    id: '123',
    author: {
      name: 'Bruce',
      avatar: 'url/of/image',
      initials: 'BB'
    }
  };

  beforeEach(() => {
    onSubmitSpy = jest.fn();
    onCancelSpy = jest.fn();
    onCommentChangeSpy = jest.fn();
    wrapper = mount(
      <CommentForm
        {...props}
        onSubmit={onSubmitSpy}
        onCancel={onCancelSpy}
        onCommentChange={onCommentChangeSpy}
        onRowCountChange={onRowCountChange}
        users={[]}
      />
    );
  });

  test('sets the initial state', () => {
    expect(wrapper.state('inputValue')).toEqual('');
  });

  test('adds a state class of has-value', () => {
    wrapper.setState({ inputValue: 'test' });
    expect(wrapper.find('form').hasClass('has-value')).toBe(true);

    wrapper.setState({ inputValue: '' });
    expect(wrapper.find('form').hasClass('has-value')).toBe(false);

    wrapper.setProps({ value: 'test' });
    expect(wrapper.find('form').hasClass('has-value')).toBe(true);
  });

  test('calls props.onSubmit', () => {
    wrapper.find('form').simulate('submit');
    expect(onSubmitSpy).toHaveBeenCalledTimes(1);
  });

  test('removes mention markup onSubmit', () => {
    wrapper.setState({ inputValue: 'testing testing @[waffles]' });
    const preventDefaultSpy = jest.fn();
    const event = { preventDefault: preventDefaultSpy };
    wrapper.instance().onSubmit(event);
    expect(onSubmitSpy).toHaveBeenCalledWith('testing testing @waffles');
  });

  test('calls props.onCancel', () => {
    wrapper.instance().cancelComment();
    expect(onCancelSpy).toHaveBeenCalledTimes(1);
  });

  test('renders an avatar (with the correct props)', () => {
    const avatar = wrapper.find(Avatar);
    expect(avatar).toHaveLength(1);
    expect(avatar.prop('url')).toEqual(props.author.avatar);
    expect(avatar.prop('initials')).toEqual(props.author.initials);
  });

  test('does not render an avatar', () => {
    wrapper.setProps({ showAuthor: false });
    expect(wrapper.find(Avatar)).toHaveLength(0);
  });

  test('renders CommentFormInput (with correct props)', () => {
    const input = wrapper.find(CommentFormInput);
    expect(input).toHaveLength(1);
    expect(input.prop('handleOnChange')).toEqual(
      wrapper.instance().updateInputValue
    );
    expect(input.prop('focusOnMount')).toEqual(false);
    expect(input.prop('inputValue')).toEqual('');

    wrapper.setState({ inputValue: 'test' });
    expect(input.prop('inputValue')).toEqual('test');

    expect(input.prop('handleOnFocus')).toEqual(
      wrapper.instance().toggleInputHasFocus
    );

    expect(input.prop('users')).toEqual([]);
  });

  test('renders CommentFormActions (with correct props)', () => {
    wrapper.setProps({ value: 'test' });
    const actions = wrapper.find(CommentFormActions);
    expect(actions).toHaveLength(1);
    expect(actions.prop('onSubmit')).toEqual(wrapper.instance().onSubmit);
    expect(actions.prop('onCancel')).toEqual(wrapper.instance().cancelComment);
  });

  test('updates the input value', () => {
    wrapper.instance().updateInputValue({ target: { value: 'test 2' } });
    expect(wrapper.state('inputValue')).toEqual('test 2');
    expect(onCommentChangeSpy).toHaveBeenCalledWith('123', 'test 2');
  });

  test('toggles the focus state for the input', () => {
    wrapper.instance().toggleInputHasFocus();
    expect(wrapper.state('inputHasFocused')).toEqual(true);

    wrapper.instance().toggleInputHasFocus();
    expect(wrapper.state('inputHasFocused')).toEqual(false);
  });

  test('renders ShortcutTriggers', () => {
    expect(wrapper.find(ShortcutTrigger)).toHaveLength(0);
    wrapper.setState({ inputHasFocused: true });
    const shortcutTriggers = wrapper.find(ShortcutTrigger);
    expect(shortcutTriggers).toHaveLength(2);

    expect(shortcutTriggers.first().prop('shortcutKey')).toEqual('Enter');
    expect(shortcutTriggers.first().prop('onShortcutTrigger')).toEqual(
      wrapper.instance().onSubmit
    );
    expect(shortcutTriggers.first().prop('withCtrlKey')).toEqual(true);

    expect(shortcutTriggers.last().prop('shortcutKey')).toEqual('Enter');
    expect(shortcutTriggers.last().prop('onShortcutTrigger')).toEqual(
      wrapper.instance().onSubmit
    );
    expect(shortcutTriggers.last().prop('withMetaKey')).toEqual(true);
  });

  test('adds a inline modifier when editing', () => {
    wrapper.setProps({ editing: true });
    expect(wrapper.hasClass('comment-form--inline')).toBe(true);
  });
});
