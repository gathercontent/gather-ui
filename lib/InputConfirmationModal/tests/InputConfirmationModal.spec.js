import { cleanup, render, fireEvent } from '@testing-library/react';
import { InputConfirmationModal } from 'lib';
import { React } from 'tests/setup';

describe('InputConfirmationModal', () => {
  const onConfirmSpy = jest.fn();
  const defaultProps = {
    onConfirm: onConfirmSpy,
    introTitle: 'Do a delete',
    confirmTitle: 'Confirm a delete',
    introBody: 'ready to delete something?',
    confirmBody: 'are you sure you are sure?',
    show: true,
    onHide: jest.fn()
  };

  const renderWrapper = (props = defaultProps) =>
    render(<InputConfirmationModal {...props} />);

  afterEach(() => {
    cleanup();
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  test('makes you confirm by typing the keyword', () => {
    const { getByText, getByPlaceholderText } = renderWrapper();
    expect(getByText(defaultProps.introTitle));
    expect(getByText(defaultProps.introBody));
    fireEvent.click(getByText('Confirm'));

    expect(getByText(defaultProps.confirmTitle));
    expect(getByText(defaultProps.confirmBody));
    fireEvent.click(getByText('Delete'));
    expect(onConfirmSpy).not.toBeCalled();

    const confirmInput = getByPlaceholderText('Type DELETE to confirm');
    fireEvent.change(confirmInput, {
      target: {
        value: 'PLOP'
      }
    });
    fireEvent.click(getByText('Delete'));
    expect(onConfirmSpy).not.toBeCalled();

    fireEvent.change(confirmInput, {
      target: {
        value: 'DELETE'
      }
    });
    fireEvent.click(getByText('Delete'));
    expect(onConfirmSpy).toBeCalled();
  });

  test('lets you skip the confirmation', () => {
    const { getByText } = renderWrapper({
      ...defaultProps,
      skipConfirm: true
    });
    expect(getByText(defaultProps.introTitle));
    expect(getByText(defaultProps.introBody));
    fireEvent.click(getByText('Delete'));
    expect(onConfirmSpy).toBeCalled();
  });
});
