import React from "react";
import "./profile.styles.scss";
import profileImage from "@assets/profile.jpg";

const Profile = () => {
  return (
    <section className="profile">
      <aside>
        <header>Edit icon here.</header>
        <figure>
          <img src={profileImage} style={{ maxWidth: "200px" }} alt="profile image" />
        </figure>
        <div className="profile-information">
          <div>josey_wales@cs.com</div>
          <div>Full Name: Josey Wales</div>
          <div>Email: j.wales@email.com</div>
          <div>Phone: +1 555 4545</div>
        </div>
      </aside>
      <aside>user dashboard here</aside>
    </section>
  );
};

export default Profile;
