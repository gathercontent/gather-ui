import { render, fireEvent } from '@testing-library/react';
import { React } from '../setup';
import { SelectedObjectsProvider, SelectedObjectsContext } from '../../lib';

describe('SelectedObjectsProvider', () => {
  const createWrapper = child => (
    <SelectedObjectsProvider>
      <SelectedObjectsContext.Consumer>{child}</SelectedObjectsContext.Consumer>
    </SelectedObjectsProvider>
  );

  it('appends a selected id', () => {
    const childSpy = jest.fn();

    const { getByText } = render(
      createWrapper(context => (
        <React.Fragment>
          <button
            type="button"
            onClick={() => context.updateSelected('7', 'testType')}
          >
            Append Id
          </button>
          {childSpy(context)}
        </React.Fragment>
      ))
    );

    fireEvent.click(getByText('Append Id'));

    const resultingContext = childSpy.mock.calls[1][0];

    expect(resultingContext.selected).toEqual(['7']);
    expect(resultingContext.lastInteracted).toEqual('7');
    expect(resultingContext.currentSelectedType).toEqual('testType');
  });

  it('removes a selected id if it is already selected', () => {
    const childSpy = jest.fn();

    const { getByText } = render(
      createWrapper(context => (
        <React.Fragment>
          <button
            type="button"
            onClick={() => context.updateSelected('7', 'anotherTestType')}
          >
            Click with Id
          </button>
          {childSpy(context)}
        </React.Fragment>
      ))
    );

    fireEvent.click(getByText('Click with Id'));
    fireEvent.click(getByText('Click with Id'));

    const resultingContext = childSpy.mock.calls[2][0];

    expect(resultingContext.selected).toEqual([]);
    expect(resultingContext.lastInteracted).toEqual('7');
    expect(resultingContext.currentSelectedType).toEqual(null);
  });

  //
  it('sets multiple selected ids', () => {
    const childSpy = jest.fn();

    const { getByText } = render(
      createWrapper(context => (
        <React.Fragment>
          <button
            type="button"
            onClick={() =>
              context.selectMultiple(['7', '8', '9', '10'], 'testType')
            }
          >
            Select Multiple
          </button>
          {childSpy(context)}
        </React.Fragment>
      ))
    );

    fireEvent.click(getByText('Select Multiple'));

    const resultingContext = childSpy.mock.calls[1][0];

    expect(resultingContext.selected).toEqual(['7', '8', '9', '10']);
    expect(resultingContext.currentSelectedType).toEqual('testType');
  });

  it('deselects multiple ids', () => {
    const childSpy = jest.fn();

    const { getByText } = render(
      createWrapper(context => (
        <React.Fragment>
          <button
            type="button"
            onClick={() =>
              context.selectMultiple(['7', '8', '9', '10', '5', '3', '1'])
            }
          >
            Select Multiple
          </button>
          <button
            type="button"
            onClick={() =>
              context.deselectMultiple(
                ['7', '8', '9', '10', '5', '3', '1'],
                '1'
              )
            }
          >
            Deselect Multiple
          </button>
          {childSpy(context)}
        </React.Fragment>
      ))
    );

    fireEvent.click(getByText('Select Multiple'));
    fireEvent.click(getByText('Deselect Multiple'));

    const resultingContext = childSpy.mock.calls[2][0];

    expect(resultingContext.selected).toEqual([]);
    expect(resultingContext.lastInteracted).toEqual('1');
    expect(resultingContext.currentSelectedType).toEqual(null);
  });
  //
  it('clears everything', () => {
    const childSpy = jest.fn();

    const { getByText } = render(
      createWrapper(context => (
        <React.Fragment>
          <button
            type="button"
            onClick={() =>
              context.selectMultiple(['7', '8', '9', '10', '5', '3', '1'])
            }
          >
            Select Multiple
          </button>
          <button type="button" onClick={() => context.clear()}>
            Clear
          </button>
          {childSpy(context)}
        </React.Fragment>
      ))
    );

    fireEvent.click(getByText('Select Multiple'));
    fireEvent.click(getByText('Clear'));

    const resultingContext = childSpy.mock.calls[2][0];
    expect(resultingContext.selected).toEqual([]);
    expect(resultingContext.lastInteracted).toEqual(null);
    expect(resultingContext.currentSelectedType).toEqual(null);
  });
});