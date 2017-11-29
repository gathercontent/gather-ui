import { React, expect, shallow, sinon } from '../setup';
import Label from '../../lib/Form/Label';

describe('Label', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Label id="123" label="foo bar" />);
  });

  it('has a html label with a "for" attribute', () => {
    expect(wrapper.find('label').prop('htmlFor')).to.equal('123');
    expect(
      wrapper
        .find('label')
        .find('.form-input__text')
        .prop('children')
    ).to.include('foo bar');
  });

  it('may have a subtitle', () => {
    wrapper.setProps({ subtitle: 'some description' });
    const expectedSubtitle = (
      <span className="form-checkbox__subtitle">some description</span>
    );
    expect(wrapper.find('label').prop('children')).to.include(expectedSubtitle);
  });

  it('adds a highlight modifier to the text', () => {
    wrapper.setProps({ highlight: true });
    const hasHighlightClass = wrapper
      .find('.form-input__text')
      .hasClass('is-highlight');
    expect(hasHighlightClass).to.equal(true);
  });

  it('adds an active state class to the text', () => {
    wrapper.setProps({ active: true });
    const hasActiveClass = wrapper
      .find('.form-input__text')
      .hasClass('is-active');
    expect(hasActiveClass).to.equal(true);
  });

  it('adds a highlight-active state class to the text', () => {
    wrapper.setProps({ highlightHover: true });
    const hasHighlightActiveClass = wrapper
      .find('.form-input__text')
      .hasClass('is-highlight--active');
    expect(hasHighlightActiveClass).to.equal(true);
  });

  it('is passed overwriteLabelDefault as false, it renders a label and not a button', () => {
    wrapper.setProps({ overwriteLabelDefault: false });
    expect(wrapper.find('.form-checkbox__label')).to.have.length(1);
    expect(wrapper.find('.form-checkbox__label--button')).to.have.length(0);
  });

  it('is passed overwriteLabelDefault as true, it renders a button instead of a label', () => {
    wrapper.setProps({ overwriteLabelDefault: true });
    expect(wrapper.find('.form-checkbox__label--button')).to.have.length(1);
  });

  it('is passed overwriteLabelDefault as a function, it fires on click', () => {
    const labelClickSpy = sinon.spy();
    wrapper.setProps({ overwriteLabelDefault: labelClickSpy });
    expect(wrapper.find('.form-checkbox__label--button')).to.have.length(1);
    wrapper.simulate('click');
    expect(labelClickSpy.called).to.equal(true);
  });
});
