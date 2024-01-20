import React from "react";
import { NavLink } from "react-router-dom";
import IconFactory from "../../icon-factory";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const MenuItem = ({ item }) => {
  const { route, icon, name } = item;

  return (
    <ListItem disablePadding component={NavLink} to={route}>
      <ListItemButton>
        <ListItemIcon>
          <IconFactory iconName={icon} />
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};

export default MenuItem;
