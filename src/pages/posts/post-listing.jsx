import React, { useState, useEffect } from "react";
import "./post-listing.styles.scss";
import axios from "axios";

import Cards from "@components/card";
import PostDetails from "./post-details";

const PostListing = () => {
  const [postData, setPostData] = useState([]);
  const [chosenChat, setChosenChat] = useState({});

  const handlePostClick = (conversationId) => {
    console.log("Clicked post ID:", conversationId);
    const chat = postData.find((chat) => chat.conversationId === conversationId);
    setChosenChat(chat);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/post.data.json");
        const { data } = response;

        setPostData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="post-listing">
      <aside>
        {Array.isArray(postData) &&
          postData.map((post) => (
            <Cards
              key={post.userId}
              {...post}
              onClick={() => handlePostClick(post.conversationId)}
            />
          ))}
      </aside>
      <aside>
        <PostDetails {...chosenChat} />
      </aside>
    </section>
  );
};

export default PostListing;
