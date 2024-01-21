import React from "react";
import "./post-listing.styles.scss";
import Card from "@components/card"
import PostCard from "@components/post-card"

const PostListing = () => {
  return (
    <section className="post-listing">
      <aside><Card /></aside>
      <aside><PostCard /></aside>
    </section>
  );
};

export default PostListing;
