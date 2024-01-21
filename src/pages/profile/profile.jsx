import React, { useState, useEffect } from "react";
import "./profile.styles.scss";

import axios from "axios";

import graph from "@assets/graph.png";
import EditIcon from "@mui/icons-material/Edit";

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
          <EditIcon />
        </header>
        <figure>
    
          {profilePic && <img src={profilePic} alt={userData.name} style={{ maxWidth: "200px" }}/>}
        </figure>
        <div className="profile-information">
          <div className="profile-information-id">{userData.id}</div>
          <h2> {userData.name}</h2>
          <p>Bio: {userData.bio}</p>
          <h3>Friends List:</h3>
          <ul>
            {userData.friends.map((friend) => (
              <li key={friend}>{friend}</li>
            ))}
          </ul>
        </div>
      </aside>
      <aside>
        <img src={graph} alt="profile metrics" style={{ width: "100%", height: "auto" }} />
      </aside>
    </section>
  );
};

export default Profile;
