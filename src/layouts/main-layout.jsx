import React from "react";
import "./main-layout.styles.scss";
import { Outlet } from "react-router-dom";

import Header from "@components/header";

const MainLayout = () => {
  return (
    <section className="main-layout">
      <Header />
      <div className="deck">
        <Outlet />
      </div>
    </section>
  );
};

export default MainLayout;
