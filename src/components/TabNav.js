import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function TabNav() {
return(
    <Menu>
<Menu.Item
          header
          as={NavLink}
          exact
          to="/"
          activeClassName="activeNavButton"
        >
          Home Page
        </Menu.Item>

        <Menu.Item
          header
          as={NavLink}
          to="/characters"
          activeClassName="activeNavButton"
        >
          Characters
        </Menu.Item>

        <Menu.Item
          header
          as={NavLink}
          to="/locations"
          activeClassName="activeNavButton"
        >
          Locations
        </Menu.Item>
        <Menu.Item
          header
          as={NavLink}
          to="/episodes"
          activeClassName="activeNavButton"
        >
          Episodes
        </Menu.Item>
      </Menu>
);
};
