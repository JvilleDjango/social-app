import React from "react";
import "./card.styles.scss";

import { Card, CardHeader, Avatar, CardActionArea } from "@mui/material/";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Cards = (expense) => {
 
  return (
    <Card className="card">
      <CardActionArea target="_blank">
        <CardHeader
          avatar={<Avatar aria-label="card" src={expense.logo} variant="rounded" />}
          title={expense.recipient}
          subheader={expense.description}
        />

        <div className="divider">
          <ArrowForwardIosIcon />
        </div>
      </CardActionArea>

    </Card>
  );
};

export default Cards;
