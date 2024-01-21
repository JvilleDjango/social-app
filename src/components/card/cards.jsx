import React from "react";
import "./cards.styles.scss";

import { Card, CardHeader, Avatar, CardActionArea, CardContent, Typography } from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Cards = ({ userId, timestamp, username, onClick }) => {
  return (
    <Card className="card" onClick={onClick}>
      <CardActionArea target="_blank">
        <CardHeader avatar={<Avatar aria-label="card" variant="rounded" />} />
        <Typography color="text.secondary" gutterBottom>
          {username}
        </Typography>

        <div className="divider">
          <ArrowForwardIosIcon />
        </div>
      </CardActionArea>
    </Card>
  );
};

export default Cards;
