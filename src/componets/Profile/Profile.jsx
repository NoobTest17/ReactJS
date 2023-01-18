import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <divx>
      <ProfileInfo/>
      <MyPosts/>
    </divx>
  )
}

export default Profile;