import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "@layouts/main-layout";
import MainTemplate from "@components/ui-templates";
import Profile from "@pages/profile";
import { PostDetails, PostListing } from "@pages/posts";
import TEMPLATE_CONFIG from "@configs/template.config";

const Routing = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route element={<MainTemplate {...TEMPLATE_CONFIG} />}>
          <Route path="/" element={<Navigate replace to="/profile" />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts" element={<PostListing />}>
            <Route path="*/post-details" element={<PostDetails />} />
          </Route>
          <Route
            path="*"
            element={
              <div style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </div>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default Routing;
