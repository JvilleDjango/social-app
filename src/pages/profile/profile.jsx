import React, { useState, useEffect } from "react";
import "./profile.styles.scss";

import axios from "axios";

import graph from "@assets/graph.png";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Avatar, AvatarGroup } from "@mui/material";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/user.data.json");

        const data = response.data;

        const image = await import(`../../assets/${data.profilePicture}`);
        setProfilePic(image.default);

        setUserData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="profile">
      <aside>
        <header>
          <IconButton aria-label="delete">
            <EditIcon />
          </IconButton>
        </header>
        <figure>
          {profilePic && <img src={profilePic} alt={userData.name} style={{ maxWidth: "200px" }} />}
        </figure>
        <div className="profile-information">
          <div className="profile-information-id">{userData.id}</div>
          <h3>{userData.name}</h3>
          <p>{userData.bio}</p>
          <h4>Friends</h4>
          <AvatarGroup max={4}>
            {userData.friends.map((friend) => (
              <Avatar key={friend} alt={friend} src="/static/images/avatar/1.jpg" />
            ))}
          </AvatarGroup>
        </div>
      </aside>
      <aside>
        <img src={graph} alt="profile metrics" style={{ width: "100%", height: "auto" }} />
      </aside>
    </section>
  );
};

export default Profile;
