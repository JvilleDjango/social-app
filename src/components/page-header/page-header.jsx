import React from "react";
import "./page-header.styles.scss";
import { useLocation } from "react-router-dom";

import { Typography } from "@mui/material";

const PageHeader = ({ headers }) => {
  const location = useLocation();
  const { pathname } = location;

  const currRoute = pathname.split("/").pop();

  const page = headers.find((r) => r.route === currRoute);

  return (
    <div className="page-header">
      <Typography variant="h2" gutterBottom>
        {page?.pageHeader}
      </Typography>
      <Typography variant="body2">{page?.pageSubHeader}</Typography>
    </div>
  );
};

export default PageHeader;
