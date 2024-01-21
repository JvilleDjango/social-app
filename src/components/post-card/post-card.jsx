import React from "react";
import "./post-card.styles.scss";

import { Card, CardHeader, Avatar, CardActionArea } from "@mui/material/";


const PostCard = (chat) => {
 
  return (
    <Card className="post-card">
      <CardActionArea target="_blank">
        <CardHeader
          avatar={<Avatar aria-label="card" src={chat.avatar} variant="rounded" />}
        />
      </CardActionArea>

    </Card>
  );
};

export default PostCard;
