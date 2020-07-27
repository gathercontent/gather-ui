import React, { Fragment } from "react";
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Dropdown, Avatar, AvatarInformation, Icon, ConfirmationDropdown } from '../../lib/';
import StoryItem from '../styleguide/StoryItem';
import StatusIndicator from "../../lib/StatusIndicator";
import Form from "../../lib/Form";
import FormInput from "../../lib/Form/FormInput";

const createDelayedPromise = (timeout = 2000) =>
  new Promise(resolve => setTimeout(resolve, timeout));

const createContentWithItems = props => (
  <Dropdown.Content {...props} collapse>
    <Dropdown.ActionGroup>
      <Dropdown.Action action={() => action('action clicked')} selected>
        Dropdown item 1
      </Dropdown.Action>
      <Dropdown.Action action={() => action('action clicked')}>
        Dropdown item 2
      </Dropdown.Action>
      <Dropdown.Action action={() => action('action clicked')}>
        Dropdown item 3
      </Dropdown.Action>
    </Dropdown.ActionGroup>

    <Dropdown.ActionGroup>
      <Dropdown.Action action={() => action('action clicked')} danger>
        Danger dropdown item
      </Dropdown.Action>
    </Dropdown.ActionGroup>
  </Dropdown.Content>
);

storiesOf('Components', module)
  .add('Dropdown', () => {
    return (
      <div>
        <StoryItem
          title="Dropdown"
          description="A dropdown contains a trigger and content. Both can be take any form."
        >
          <Dropdown id="id-1">
            <Dropdown.Trigger>
              <strong>Click on me to show the dropdown</strong>
            </Dropdown.Trigger>

            <Dropdown.Content>
              <Avatar
                url="https://d3iw72m71ie81c.cloudfront.net/female-83.jpg"
              >
                <AvatarInformation
                  email="heythere@lol.com"
                  name="Mr Ben"
                />
              </Avatar>
            </Dropdown.Content>
          </Dropdown>
        </StoryItem>

        <StoryItem
          title="Dropdown with Button triggers"
          description="Triggers can also use the Button component, which is common."
        >
          <Dropdown id="id-2">
            <Dropdown.Trigger useButton>
              Show content
            </Dropdown.Trigger>

            <Dropdown.Content>
              {(showContent) =>
                <button tabIndex={showContent ? 0 : -1}>Focusable element</button>
              }
            </Dropdown.Content>
          </Dropdown>
        </StoryItem>

        <StoryItem
          title="Dropdown with different alignments"
          description="The dropdown content can be aligned to different points of the trigger."
        >
          <Dropdown id="id-3">
            <Dropdown.Trigger useButton>
              Left alignment
            </Dropdown.Trigger>

            {createContentWithItems()}
          </Dropdown>

          <Dropdown id="id-4">
            <Dropdown.Trigger useButton>
              Centre alignment
            </Dropdown.Trigger>

            {createContentWithItems({ centre: true })}
          </Dropdown>

          <Dropdown id="id-5">
            <Dropdown.Trigger useButton>
              Right alignment
            </Dropdown.Trigger>

            {createContentWithItems({ right: true })}
          </Dropdown>
        </StoryItem>

        <StoryItem
          title="Dropdown with top alignment"
          description="The dropdown content can also be vertically aligned so it appears above the trigger."
        >
          <Dropdown id="id-6">
            <Dropdown.Trigger useButton>
              Top left alignment
            </Dropdown.Trigger>

            {createContentWithItems({ top: true })}
          </Dropdown>

          <Dropdown id="id-7">
            <Dropdown.Trigger useButton>
              Top centre alignment
            </Dropdown.Trigger>

            {createContentWithItems({ top: true, centre: true })}
          </Dropdown>

          <Dropdown id="id-8">
            <Dropdown.Trigger useButton>
              Top right alignment
            </Dropdown.Trigger>

            {createContentWithItems({ top: true, right: true })}
          </Dropdown>
        </StoryItem>

        <StoryItem
          title="Dropdown with right alignment"
          description="The dropdown content can also be horizontally aligned."
        >
          <Dropdown id="id-9">
            <Dropdown.Trigger useButton>
              fixRight alignment collapse
            </Dropdown.Trigger>

            <Dropdown.Content fixRight collapse noBorder>
              <Dropdown.ActionGroup horizontal>
                <Dropdown.Action action={() => action('action clicked')} plain>
                  <Icon name="bulletList" defaultActiveColor={false} />
                </Dropdown.Action>
                <Dropdown.Action action={() => action('action clicked')} plain>
                  <Icon name="numberedList" defaultActiveColor={false} />
                </Dropdown.Action>
                <Dropdown.Action action={() => action('action clicked')} plain>
                  <Icon name="table" defaultActiveColor={false}/>
                </Dropdown.Action>
                <Dropdown.Action action={() => action('action clicked')} plain>
                  <Icon name="quote" defaultActiveColor={false}/>
                </Dropdown.Action>
              </Dropdown.ActionGroup>
            </Dropdown.Content>
          </Dropdown>
        </StoryItem>

        <StoryItem
          title="Dropdown with auto positioning"
          description="The dropdown content have auto positioning based on where the trigger is."
        >
          <Dropdown id="id-3" autoPosition>
            <Dropdown.Trigger useButton>
              Auto Position
            </Dropdown.Trigger>

            {createContentWithItems()}
          </Dropdown>
        </StoryItem>
        <StoryItem
          title="Confirmation Dropdown"
          description="A dropdown like component that renders a confirmation dropdown."
        >
          <ConfirmationDropdown
            id="confirm-dropdown"
            confirmationText="Archive"
            confirmationPromise={createDelayedPromise}
            actionTooltip="archive"
            dropdownContent={(
              <Fragment>
                <Dropdown.Header>
                  <h3>Archive 1 item</h3>
                </Dropdown.Header>
                <Dropdown.Section>
                  <p>The selected item(s) will be moved to your project's archived items section.</p>
                  <p>Arching items will disconnect any applied templates, and also remove assignees and due-dates.</p>
                </Dropdown.Section>
              </Fragment>
            )}
            isDanger
          >
            <Icon name="archive" />
          </ConfirmationDropdown>

          <ConfirmationDropdown
            id="trash-dropdown-2"
            confirmationText="Archive"
            confirmationPromise={createDelayedPromise}
            actionTooltip="do an archive or summin"
            dropdownContent={(
              <Fragment>
                <Dropdown.Header>
                  <h3>Archive 1 item</h3>
                  <ConfirmationDropdown
                    id="confirm-sub-dropdown"
                    confirmationText="Archive all"
                    dropdownContent={(
                      <Fragment>
                        <Dropdown.Header>
                          <h3>Remove all items</h3>
                        </Dropdown.Header>
                        <Dropdown.Section>
                          <p>Do you wish to archive all items?</p>
                        </Dropdown.Section>
                      </Fragment>
                    )}
                    confirmationPromise={createDelayedPromise}
                    position={{
                      bottom: true,
                      left: true,
                    }}
                    isDanger
                    collapse
                  >
                    Archive all items
                  </ConfirmationDropdown>
                </Dropdown.Header>
                <Dropdown.ActionGroup bordered collapse>
                  <Dropdown.Action action={() => action('action clicked')}>
                    <Avatar
                      url="https://d3iw72m71ie81c.cloudfront.net/female-83.jpg"
                    >
                      <AvatarInformation
                        email="heythere@lol.com"
                        name="Mr Ben"
                      />
                    </Avatar>
                  </Dropdown.Action>
                  <Dropdown.Action action={() => action('action clicked')}>
                    <Avatar
                      url="https://d3iw72m71ie81c.cloudfront.net/female-83.jpg"
                    >
                      <AvatarInformation
                        email="heythere@lol.com"
                        name="Mr Ben"
                      />
                    </Avatar>
                  </Dropdown.Action>
                  <Dropdown.Action selected action={() => action('action clicked')}>
                    <Avatar
                      url="https://d3iw72m71ie81c.cloudfront.net/female-83.jpg"
                    >
                      <AvatarInformation
                        email="heythere@lol.com"
                        name="Mr Ben"
                      />
                    </Avatar>
                  </Dropdown.Action>
                </Dropdown.ActionGroup>
              </Fragment>
            )}
            isDanger
            collapse
          >
            <Icon name="trash" />
          </ConfirmationDropdown>

          <ConfirmationDropdown
            id="trash-dropdown-3"
            confirmationText="Do a thing"
            actionTooltip="plop plop lpleeep bloop blorp long sentance all the things dooby doo bla bla so fun isnt it great"
            confirmationPromise={createDelayedPromise}
            dropdownContent={(
              <Fragment>
                <Dropdown.Header collapse>
                  <Form onSubmit={() => {}} className="form h-width-100">
                    <FormInput noBorder className="h-width-100" placeholder="Search for users" />
                  </Form>

                </Dropdown.Header>
                <Dropdown.ActionGroup bordered collapse>
                  <Dropdown.Action action={() => action('action clicked')}>
                    <Avatar
                      url="https://d3iw72m71ie81c.cloudfront.net/female-83.jpg"
                    >
                      <AvatarInformation
                        email="heythere@lol.com"
                        name="Mr Ben"
                      />
                    </Avatar>
                  </Dropdown.Action>
                  <Dropdown.Action action={() => action('action clicked')}>
                    <Avatar
                      url="https://d3iw72m71ie81c.cloudfront.net/female-83.jpg"
                    >
                      <AvatarInformation
                        email="heythere@lol.com"
                        name="Mr Ben"
                      />
                    </Avatar>
                  </Dropdown.Action>
                  <Dropdown.Action selected action={() => action('action clicked')}>
                    <Avatar
                      url="https://d3iw72m71ie81c.cloudfront.net/female-83.jpg"
                    >
                      <AvatarInformation
                        email="heythere@lol.com"
                        name="Mr Ben"
                      />
                    </Avatar>
                  </Dropdown.Action>
                </Dropdown.ActionGroup>
              </Fragment>
            )}
            isDanger
            collapse
          >
            <Icon name="userEdit" />
          </ConfirmationDropdown>
        </StoryItem>

        <StoryItem
          title="Dropdown Menu"
          description="DropdownMenu is being phased out. You can achieve the same outcome by composing Dropdown components."
        >
          <div style={{ maxWidth: '300px' }}>
            <Dropdown id="dropdown-menu" autoPosition block>
              <Dropdown.Trigger useSelect>
                Select an option...
              </Dropdown.Trigger>

              {createContentWithItems()}
            </Dropdown>
          </div>
        </StoryItem>

        <StoryItem
          title="Dropdown (with other components as content)"
          description="We can compose dropdowns with various components."
        >
          <div style={{ maxWidth: '300px' }}>
            <Dropdown id="dropdown-menu" block>
              <Dropdown.Trigger useSelect>
                <StatusIndicator color="green" label="Status 2" medium />
              </Dropdown.Trigger>

              <Dropdown.Content collapse top left full>
                <Dropdown.Action action={() => action('action clicked')} overflow>
                  <StatusIndicator color="red" label="Status 1" medium softLabel />
                </Dropdown.Action>
                <Dropdown.Action action={() => action('action clicked')} overflow selected>
                  <StatusIndicator color="green" label="Status 2" medium softLabel />
                </Dropdown.Action>
                <Dropdown.Action action={() => action('action clicked')} overflow>
                  <StatusIndicator color="purple" label="Status 3" medium softLabel />
                </Dropdown.Action>
              </Dropdown.Content>
            </Dropdown>
          </div>
        </StoryItem>
      </div>
    );
  });
