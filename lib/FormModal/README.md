# FormModal
A form within a modal

### Props

| Name             | Type    | Default    | Required | Description                                                                   |
| ---------------- | ------- | ---------- | -------- |------------------------------------------------------------------------------ |
| title            | String  |            | Yes      | Appears in the modal title bar.                                               |
| children         | Node    |            | Yes      | The form components/elements themselves.                                      |
| submitText       | String  |            | Yes      | The copy for the submit button.                                               |
| submitHandler    | Func    |            | Yes      | This gets called when the form is submitted.                                  |
| cancelText       | String  |            | Yes      | The copy for the cancel button.                                               |
| onHide           | Func    |            | Yes      | If using `FormModal` inside with `withModalTrigger` this is ALWAYS OVERRIDDEN |
| formIsSubmitting | Boolean | `false`    | No       | Should the progress button show the spinner?                                  |

### Usage
```
<FormModal
  title="FormModal example"
  submitText="Submit"
  submitHandler={action('handle')}
  cancelText="Cancel"
  onHide={action('hide')}
>
  <FormGroup>
    <FormLabel>Field A</FormLabel>
    <FormControl />
  </FormGroup>
  <FormGroup>
    <FormLabel>Field B</FormLabel>
    <FormControl />
  </FormGroup>
</FormModal>
```
