import React from "react";

import {
  AccountCircle,
  Message,
} from "@mui/icons-material";

function IconFactory({ iconName }) {
  const ICONS_MAP = {
    accountcircle: <AccountCircle />,
    message: <Message />
  };

  const normalizedIconName = iconName?.toLowerCase();

  // Check if the icon exists in the ICONS_MAP object
  if (ICONS_MAP[normalizedIconName]) {
    return ICONS_MAP[normalizedIconName];
  }

  return null;
}

export default IconFactory;
