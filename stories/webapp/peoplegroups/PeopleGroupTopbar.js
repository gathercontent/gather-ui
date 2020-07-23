import React from 'react';
import {
  TopBar,
  TopBarContent,
  TopBarCell,
  Logo,
  AvatarWithPopover,
  Search,
  Navigation
} from 'lib';
import { Dropdown } from 'react-bootstrap';

const PeopleGroupTopbar = () => (
  <TopBar fixed>
    <TopBarContent left xs={10} md={10}>
      <TopBarCell>
        <Logo />
      </TopBarCell>
      <TopBarCell>People and Groups</TopBarCell>
      <TopBarCell bordered>
        <Navigation>
          <Dropdown.Item href="#" active>
            Team members
          </Dropdown.Item>
          <Dropdown.Item href="#">Roles & permissions</Dropdown.Item>
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
                displayChecked
              />
            </Search.Options>
            <Search.List heading="Items">
              <Search.ListItem title="bloop" subText="123 435">
                hi there <em>waffles</em> hi!
              </Search.ListItem>
              <Search.ListItem title="blorp" subText="123 435">
                hhello!! <em>waffles</em> hi!
              </Search.ListItem>
            </Search.List>
            <Search.List heading="Content">
              <Search.ListItem title="bloop" subText="123 435">
                hi there <em>waffles</em> hi!
              </Search.ListItem>
              <Search.ListItem title="blorp" subText="123 435">
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
);

export default PeopleGroupTopbar;
