import React from "react";
import "./header.styles.scss";

import AccountMenu from "@components/account-menu";

const Header = () => {
  return (
    <section className="mast-head">
      <div className="logo">My Social App</div>

      <div className="mast-head__actions--right">
        {/* <AccountMenu currentUser="Current User" /> */}
      </div>
    </section>
  );
};

export default Header;
