import React from "react";
import "./post-details.styles.scss";
import { Card, CardHeader, Avatar, CardContent, Typography } from "@mui/material/";

const PostDetails = ({ userId, username, messages = [], timestamp }) => {
  return (
    <section className="post-details">
      {messages.map((message) => (
        <>
          <Typography sx={{textAlign: 'center', padding: '10px'}}>{timestamp}</Typography>
          <Card
            key={message.messageId}
            className={`post-details-card ${
              message.senderId === "host_id_1" ? "host" : "recipient"
            }`}>
            <CardContent>
              <Typography>{message.content}</Typography>
            </CardContent>
          </Card>
        </>
      ))}
    </section>
  );
};

export default PostDetails;
