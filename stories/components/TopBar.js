import React from 'react';
import { storiesOf } from '@storybook/react';
import { Dropdown } from 'react-bootstrap';
import StoryItem from '../styleguide/StoryItem';
import TopBar from '../../lib/TopBar';
import TopBarContent from '../../lib/TopBar/TopBarContent';
import TopBarCell from '../../lib/TopBar/TopBarCell';
import Button from '../../lib/Button';
import Icon from '../../lib/Icon';
import Avatar from '../../lib/Avatar';
import AvatarWithPopover from '../../lib/Avatar/AvatarWithPopover';
import AvatarGroup from '../../lib/Avatar/AvatarGroup';
import Navigation from '../../lib/Navigation';
import Logo from '../../lib/Logo';
import DropdownSwitcher from '../../lib/DropdownSwitcher';
import Search from '../../lib/Search';
import NotificationBar from '../../lib/Notification/bar';

storiesOf('Components', module).add('TopBar', () => (
  <div>
    <StoryItem
      title="TopBar site wide"
      description="TopBar is the top bar used throughout the whole site, can add a fixed attribute to fix it to the top."
    >
      <TopBar>
        <TopBarContent left xs={10} md={5}>
          <TopBarCell>
            <Icon
              name="backArrow"
              className="top-bar__action top-bar__action--collapse-left"
            />
          </TopBarCell>
          <TopBarCell bordered>
            <Button
              types={['icon-only']}
              clickHandler={() => {}}
              className="top-bar__action"
            >
              <Icon name="menu" size="minor" />
            </Button>
          </TopBarCell>
        </TopBarContent>
        <TopBarContent right xs={2} md={4}>
          <TopBarCell>
            <AvatarGroup maximum={2}>
              <Avatar
                initials="RS"
                name="Richard Swagshaw"
                colour="rgb(252, 92, 84)"
              />
              <Avatar
                initials="JD"
                name="James Darracott"
                colour="rgb(61, 138, 235)"
              />
            </AvatarGroup>
          </TopBarCell>
          <TopBarCell bordered>
            <Button
              types={['icon-only']}
              className="top-bar__action"
              clickHandler={() => {}}
            >
              <Icon name="menuDotted" />
            </Button>
          </TopBarCell>
        </TopBarContent>
        <TopBarContent center xs={12} md={3}>
          Centered content
        </TopBarContent>
      </TopBar>
    </StoryItem>
    <StoryItem
      title="TopBar dark"
      description="TopBar with the dark theme."
    >
      <TopBar useDarkTheme>
        <TopBarContent left xs={10} md={5}>
          <TopBarCell>
            <Icon
              name="backArrow"
              className="top-bar__action top-bar__action--collapse-left"
            />
          </TopBarCell>
          <TopBarCell bordered>
            <Button
              types={['icon-only']}
              clickHandler={() => {}}
              className="top-bar__action"
            >
              <Icon name="menu" size="minor" />
            </Button>
          </TopBarCell>
        </TopBarContent>
        <TopBarContent right xs={2} md={4}>
          <TopBarCell>
            <AvatarGroup maximum={2}>
              <Avatar
                initials="RS"
                name="Richard Swagshaw"
                colour="rgb(252, 92, 84)"
              />
              <Avatar
                initials="JD"
                name="James Darracott"
                colour="rgb(61, 138, 235)"
              />
            </AvatarGroup>
          </TopBarCell>
          <TopBarCell bordered>
            <Button
              types={['icon-only']}
              className="top-bar__action"
              clickHandler={() => {}}
            >
              <Icon name="menuDotted" />
            </Button>
          </TopBarCell>
        </TopBarContent>
        <TopBarContent center xs={12} md={3}>
          Centered content
        </TopBarContent>
      </TopBar>
    </StoryItem>
    <StoryItem
      title="TopBar App Example"
      description="Example of the TopBar used on the app."
    >
      <TopBar>
        <TopBarContent left xs={10} md={10}>
          <TopBarCell>
            <Logo />
          </TopBarCell>
          <TopBarCell>
            <DropdownSwitcher title="Project Name">
              <ul className="dropdown-menu">
                <li className="dropdown__item">
                  <a href="#test" className="dropdown__link">
                    Personal Settings
                  </a>
                </li>
              </ul>
            </DropdownSwitcher>
          </TopBarCell>
          <TopBarCell bordered>
            <Navigation>
              <Dropdown.Item href="#" active>
                Items
              </Dropdown.Item>
              <Dropdown.Item href="#">Archived Items</Dropdown.Item>
            </Navigation>
          </TopBarCell>
        </TopBarContent>
        <TopBarContent right xs={2} md={2}>
          <TopBarCell>
            <Search className="top-bar__search-dropdown">
              <Search.Input onChange={() => {}} />
              <Search.Body>
                <Search.Options>
                  <Search.ToggleFilter
                    label="Search all projects"
                    clickHandler={() => {}}
                  />
                </Search.Options>
                <Search.List heading="Items">
                  <Search.ListItem
                    title="bloop"
                    subText="123 435"
                  >
                    hi there <em>waffles</em> hi!
                  </Search.ListItem>
                  <Search.ListItem
                    title="blorp"
                    subText="123 435"
                  >
                    hhello!! <em>waffles</em> hi!
                  </Search.ListItem>
                </Search.List>
                <Search.List heading="Content">
                  <Search.ListItem
                    title="bloop"
                    subText="123 435"
                  >
                    hi there <em>waffles</em> hi!
                  </Search.ListItem>
                  <Search.ListItem
                    title="blorp"
                    subText="123 435"
                  >
                    hhello!! <em>waffles</em> hi!
                  </Search.ListItem>
                </Search.List>
              </Search.Body>
            </Search>
          </TopBarCell>
          <TopBarCell>
            <AvatarWithPopover
              name="Angus Edwardson"
              initials="AE"
              email="example@gmail.com"
              triggerEvent="onClick"
              popoverClass="popover-dropdown"
              caret
            >
              <ul className="dropdown-menu">
                <li className="dropdown__item">
                  <a href="#test" className="dropdown__link">
                    Personal Settings
                  </a>
                </li>
              </ul>
            </AvatarWithPopover>
          </TopBarCell>
        </TopBarContent>
      </TopBar>
    </StoryItem>

    <StoryItem
      title="TopBar with notification"
      description="The topbar can display a notification"
    >
      <TopBar notification={<NotificationBar level="warning" center>Important information here!</NotificationBar>}>
        <TopBarContent left xs={10} md={10}>
          <TopBarCell>
            <Logo />
          </TopBarCell>
          <TopBarCell>
            <DropdownSwitcher title="Project Name">
              <ul className="dropdown-menu">
                <li className="dropdown__item">
                  <a href="#test" className="dropdown__link">
                    Personal Settings
                  </a>
                </li>
              </ul>
            </DropdownSwitcher>
          </TopBarCell>
          <TopBarCell bordered>
            <Navigation>
              <Dropdown.Item href="#" active>
                Items
              </Dropdown.Item>
              <Dropdown.Item href="#">Archived Items</Dropdown.Item>
            </Navigation>
          </TopBarCell>
        </TopBarContent>
        <TopBarContent right xs={2} md={2}>
          <TopBarCell>
            <Search className="top-bar__search-dropdown">
              <Search.Input onChange={() => {}} />
              <Search.Body>
                <Search.Options>
                  <Search.ToggleFilter
                    label="Search all projects"
                    clickHandler={() => {}}
                  />
                </Search.Options>
                <Search.List heading="Items">
                  <Search.ListItem
                    title="bloop"
                    subText="123 435"
                  >
                    hi there <em>waffles</em> hi!
                  </Search.ListItem>
                  <Search.ListItem
                    title="blorp"
                    subText="123 435"
                  >
                    hhello!! <em>waffles</em> hi!
                  </Search.ListItem>
                </Search.List>
                <Search.List heading="Content">
                  <Search.ListItem
                    title="bloop"
                    subText="123 435"
                  >
                    hi there <em>waffles</em> hi!
                  </Search.ListItem>
                  <Search.ListItem
                    title="blorp"
                    subText="123 435"
                  >
                    hhello!! <em>waffles</em> hi!
                  </Search.ListItem>
                </Search.List>
              </Search.Body>
            </Search>
          </TopBarCell>
          <TopBarCell>
            <AvatarWithPopover
              name="Angus Edwardson"
              initials="AE"
              email="example@gmail.com"
              triggerEvent="onClick"
              popoverClass="popover-dropdown"
              caret
            >
              <ul className="dropdown-menu">
                <li className="dropdown__item">
                  <a href="#test" className="dropdown__link">
                    Personal Settings
                  </a>
                </li>
              </ul>
            </AvatarWithPopover>
          </TopBarCell>
        </TopBarContent>
      </TopBar>
    </StoryItem>
  </div>
));
