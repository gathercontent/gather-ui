import React, {Component, Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import {
    Modal,
    Button,
    ButtonGroup,
    ConfirmationModal,
    withModalTrigger,
    FormModal,
    StatusIndicator,
    DueDatePicker,
    Icon,
    ImageLoader,
    SelectionModal,
    Checkbox,
    InputConfirmationModal,
    MenuItem,
    Input,
    Label
} from '../../lib';
import StoryItem from '../styleguide/StoryItem';
import Navigation from "../../lib/Navigation";

const ModalTrigger = withModalTrigger({children: 'Show Modal'});

class StatefulFormModal extends Component {
    state = {
        formIsSubmitting: false
    };

    submitHandler = e => {
        e.preventDefault();
        this.setState({formIsSubmitting: true});
        action('submit')(e);

        // asynchronous event, eg. HTTP request
        setTimeout(() => {
            this.setState({formIsSubmitting: false});
            action('submitHandlerReturned')();
        }, 2000);
    };

    render() {
        return (
            <FormModal
                {...this.props}
                formIsSubmitting={this.state.formIsSubmitting}
                submitHandler={this.submitHandler}
            />
        );
    }
}

storiesOf('Components', module).add('Modals', () => (
    <div>
        <StoryItem
            title="Full Modal"
            description="A modal has a header, footer and a content section."
        >
            <ModalTrigger>
                <Modal.Container>
                    <Modal.Header>Hello</Modal.Header>
                    <Modal.Body className="has-columns">
                        <Row>
                            <Col
                                className="modal__column-wrapper modal__column-wrapper--highlight"
                                xs={6}
                            >
                                <div className="modal__column">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident
                                </div>
                            </Col>
                            <Col className="modal__column-wrapper" xs={6}>
                                <div className="modal__column">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident
                                </div>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button types={['link']} clickHandler={action('clickHandler')}>
                            Cancel
                        </Button>
                        <Button types={['primary']} clickHandler={action('clickHandler')}>
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Modal.Container>
            </ModalTrigger>
        </StoryItem>

        <StoryItem
            title="Selective Modal"
            description="A modal that shows content and not the header or footer. You can pick whatever sections you do or don't require."
        >
            <ModalTrigger>
                <Modal.Container>
                    <Modal.Body className="has-columns">
                        <Row className="modal__row">
                            <Col
                                xs={12}
                                sm={6}
                                className="modal__column-wrapper modal__column-wrapper--highlight"
                            >
                                <div className="modal__column">
                                    <h2 className="modal__body-title">Lorem ipsum dolor</h2>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} className="modal__column-wrapper">
                                <div className="modal__column">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua.
                                    </p>
                                    <div className="modal__illustration">
                                        <div
                                            style={{
                                                background: 'grey',
                                                height: '100px',
                                                color: 'white'
                                            }}
                                        >
                                            Illustration goes here
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal.Container>
            </ModalTrigger>
        </StoryItem>

        <StoryItem
            title="Centered & Cleared"
            description="A modal that has its content centered and the backgrounds/borders cleared."
        >
            <ModalTrigger>
                <Modal.Container className="modal--center modal--clear" size="small">
                    <Modal.Header>Lorem ipsum dolor</Modal.Header>
                    <Modal.Body>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident
                    </Modal.Body>
                    <Modal.Footer>
                        <Button types={['primary']} clickHandler={action('clickHandler')}>
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Modal.Container>
            </ModalTrigger>
        </StoryItem>

        <StoryItem
            title="Large"
            description="Modals can be larger than normal width."
        >
            <ModalTrigger>
                <Modal.Container size="large">
                    <Modal.Body>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident
                    </Modal.Body>
                </Modal.Container>
            </ModalTrigger>
        </StoryItem>

        <StoryItem
            title="Extra Large"
            description="Modals can be extra large width!"
        >
            <ModalTrigger>
                <Modal.Container size="x-large">
                    <Modal.Body>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident
                    </Modal.Body>
                </Modal.Container>
            </ModalTrigger>
        </StoryItem>

        <StoryItem title="Full Screen" description="Modals can take up the screen">
            <ModalTrigger>
                <Modal.Container size="full-screen">
                    <Modal.Body>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident
                    </Modal.Body>
                </Modal.Container>
            </ModalTrigger>
        </StoryItem>

        <StoryItem
            title="Confirmation Modal"
            description="A toggle component that can be used to toggle options on and off."
        >
            <ModalTrigger>
                <ConfirmationModal
                    title="Are you sure?"
                    introText="Are you really sure?"
                    submitText="Hell yes"
                    cancelText="Meow no"
                    type="primary"
                    onHide={() => {
                    }}
                    submitCallback={e => {
                        action(e);
                        e.preventDefault();
                    }}
                    footerContent={
                        <Fragment>
                            Changes will be made to <strong>2 items.</strong>
                        </Fragment>
                    }
                    highlight
                    overflowHalf
                >
                    <StatusIndicator color="#93724f" label="Draft" row softLabel>
                        <DueDatePicker
                            applyDueDate={() => {
                            }}
                            removeDueDate={() => {
                            }}
                            autoPosition
                            row
                        >
                            20th Feb 2019
                        </DueDatePicker>
                    </StatusIndicator>
                    <StatusIndicator color="green" label="Publishing" row softLabel>
                        <DueDatePicker
                            applyDueDate={() => {
                            }}
                            removeDueDate={() => {
                            }}
                            autoPosition
                            row
                        >
                            20th Feb 2019
                        </DueDatePicker>
                    </StatusIndicator>
                    <StatusIndicator color="green" label="Publishing" row softLabel>
                        <DueDatePicker
                            applyDueDate={() => {
                            }}
                            removeDueDate={() => {
                            }}
                            autoPosition
                            row
                        >
                            20th Feb 2019
                        </DueDatePicker>
                    </StatusIndicator>
                    <StatusIndicator color="green" label="Publishing" row softLabel>
                        <DueDatePicker
                            applyDueDate={() => {
                            }}
                            removeDueDate={() => {
                            }}
                            autoPosition
                            row
                        >
                            20th Feb 2019
                        </DueDatePicker>
                    </StatusIndicator>
                </ConfirmationModal>
            </ModalTrigger>
        </StoryItem>

        <StoryItem
            title="Overflow Modal"
            description="A modal which has content that overflows the screen."
        >
            <ModalTrigger>
                <Modal.Container overflow>
                    <Modal.Header>Hello</Modal.Header>
                    <Modal.Body className="has-columns">
                        <Row>
                            <Col
                                className="modal__column-wrapper modal__column-wrapper--highlight"
                                xs={6}
                            >
                                <div className="modal__column">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                    sint occaecat cupidatat non proident Lorem ipsum dolor sit
                                    amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                    sint occaecat cupidatat non proident Lorem ipsum dolor sit
                                    amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident
                                </div>
                            </Col>
                            <Col className="modal__column-wrapper" xs={6}>
                                <div className="modal__column">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident
                                </div>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button types={['link']} clickHandler={action('clickHandler')}>
                            Cancel
                        </Button>
                        <Button types={['primary']} clickHandler={action('clickHandler')}>
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Modal.Container>
            </ModalTrigger>
        </StoryItem>

        <StoryItem
            title="FormModal"
            description="A modal which can contain a form. It has a progress button to indicate progress while submitting"
        >
            <ModalTrigger>
                <StatefulFormModal
                    title="FormModal example"
                    submitText="Submit"
                    cancelText="Cancel"
                    highlight
                >
                  <Label htmlFor="form-modal-field-a">
                    Field A
                  </Label>
                  <Input
                    id="form-modal-field-a"
                    className="mb-3"
                  />

                  <Label htmlFor="form-modal-field-b">
                    Field B
                  </Label>
                  <Input
                    id="form-modal-field-b"
                  />
                </StatefulFormModal>
            </ModalTrigger>
        </StoryItem>

        <StoryItem
            title="Media only modal"
            description="A modal which is used for displaying larger formats of files such as images."
        >
            <ModalTrigger>
                <Modal.Container collapse mediaOnly size="full-screen">
                    <Modal.Header/>
                    <Modal.Body>
                        <ImageLoader
                            src="https://fillmurray.com/g/500/500"
                            alt="A lovely pic!"
                            preLoadedStyles={{
                                width: '300px',
                                height: '300px'
                            }}
                            loadTransition
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <ButtonGroup>
                            <Button onClick={() => {
                            }} types={['icon-only']}>
                                <Icon name="download"/>
                            </Button>
                            <Button onClick={() => {
                            }} types={['icon-only']}>
                                <Icon name="trash"/>
                            </Button>
                        </ButtonGroup>
                    </Modal.Footer>
                </Modal.Container>
            </ModalTrigger>
        </StoryItem>

        <StoryItem
            title="Modal Footer with Space Between Modifier"
            description="Modal footer with the items set to be to be spaced out"
        >
            <ModalTrigger>
                <Modal.Container>
                    <Modal.Header>Hello</Modal.Header>
                    <Modal.Body className="has-columns">
                        <Row>
                            <Col
                                className="modal__column-wrapper modal__column-wrapper--highlight"
                                xs={6}
                            >
                                <div className="modal__column">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident
                                </div>
                            </Col>
                            <Col className="modal__column-wrapper" xs={6}>
                                <div className="modal__column">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident
                                </div>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer spaceBetween>
                        <Button types={['link']} clickHandler={action('clickHandler')}>
                            Cancel
                        </Button>
                        <Button types={['primary']} clickHandler={action('clickHandler')}>
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Modal.Container>
            </ModalTrigger>
        </StoryItem>

        <StoryItem
            title="Modal with ImageHeader"
            description="Modal with ImageHeader to display an image."
        >
            <ModalTrigger>
                <Modal.Container>
                    <Modal.ImageHeader height={401}
                                       imageUrl="https://metro.co.uk/wp-content/uploads/2017/07/187144066.jpg?quality=90&strip=all"/>
                    <Modal.Body>Look at this lovely image ☝️</Modal.Body>
                    <Modal.Footer spaceBetween>
                        <Button types={['link']} clickHandler={action('clickHandler')}>
                            Cancel
                        </Button>
                        <Button types={['primary']} clickHandler={action('clickHandler')}>
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Modal.Container>
            </ModalTrigger>
        </StoryItem>

        <StoryItem
            title="Modal with ModalHeaderNavigation"
            description="Modal with tabs in the header."
        >
            <ModalTrigger>
                <Modal.Container size="large">
                    <Modal.HeaderWithNavigation title="Title!">
                        <MenuItem style={{bottom: '-3px'}} active onClick={action('clickHandler')}>
                            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
                            <div className="h-full w-full" role="menuitem" tabIndex={0}>
                                Tab 1
                            </div>
                        </MenuItem>
                        <MenuItem style={{bottom: '-3px'}} onClick={action('clickHandler')}>
                            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
                            <div className="h-full w-full" role="menuitem" tabIndex={0}>
                                Tab 2
                            </div>
                        </MenuItem>
                    </Modal.HeaderWithNavigation>
                    <Modal.Body>Here is some body️</Modal.Body>
                    <Modal.Footer spaceBetween>
                        <Button types={['link']} clickHandler={action('clickHandler')}>
                            Cancel
                        </Button>
                        <Button types={['primary']} clickHandler={action('clickHandler')}>
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Modal.Container>
            </ModalTrigger>
        </StoryItem>
        <StoryItem
          title="SelectionModal"
          description="SelectionModal can be used with other Modal components to create a selection layout"
        >
          <ModalTrigger>
            <SelectionModal size="large">
              <Modal.Header useTitle={false}>
                <h3 className="text-lg mt-2 mb-3">Import templates</h3>
                <p className="m-0 leading-6">Imported templates will be duplicated, meaning changes made to the originals won’t be reflected here. Any components will also be imported in the process.</p>
              </Modal.Header>
              <SelectionModal.Body>
                <SelectionModal.Column isHighlight className="w-3/6 flex-shrink-0 px-4 pb-8">
                  <SelectionModal.ColumnHeader className="mb-3">PROJECTS</SelectionModal.ColumnHeader>
                  <SelectionModal.Category
                    name="Project 1"
                    subText="3 templates"
                    isSelected
                    counter={2}
                    className="mb-2"
                  />
                  <SelectionModal.Category
                    name="Project 2"
                    subText="7 templates"
                    isSelected={false}
                    className="mb-2"
                  />
                  <SelectionModal.Category
                    name="Project 3"
                    subText="56 templates"
                    isSelected={false}
                    counter={10}
                    className="mb-2"
                  />
                </SelectionModal.Column>
                <SelectionModal.Column className="px-1 pb-8">
                  <SelectionModal.ColumnHeader className="ml-2">TEMPLATES</SelectionModal.ColumnHeader>
                  <Checkbox
                    id="template 1"
                    label="template 1"
                    name="template 1"
                    className="text-base"
                  />
                  <Checkbox
                    id="template 2"
                    label="template 2"
                    name="template 2"
                    className="text-base"
                  />
                  <Checkbox
                    id="template 3"
                    label="template 3"
                    name="template 3"
                    className="text-base"
                  />
                  <Checkbox
                    id="template 4"
                    label="template 4"
                    name="template 4"
                    className="text-base"
                  />
                </SelectionModal.Column>
              </SelectionModal.Body>
              <Modal.Footer spaceBetween>
                <Button types={['link']} clickHandler={action('clickHandler')}>
                  Cancel
                </Button>
                <Button types={['primary']} clickHandler={action('clickHandler')}>
                  Confirm
                </Button>
                </Modal.Footer>
            </SelectionModal>
          </ModalTrigger>
        </StoryItem>
        <StoryItem
          title="InputConfirmationModal"
          description="A modal to make sure you are really sure that you want to do something."
        >
          <ModalTrigger>
            <InputConfirmationModal
              introTitle="Delete templates"
              confirmTitle="Confirm deletion"
              introBody="This template is currently being used. Any items using this template will be converted to use a custom structure. Are you sure you want to continue?"
              confirmBody="Template deletion is permanent and cannot be undone. Please confirm you want to delete this template by typing ‘DELETE’ in the box below."
              onConfirm={() => {}}
            />
          </ModalTrigger>
        </StoryItem>
    </div>
));
