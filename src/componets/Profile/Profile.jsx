import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div className={classes.content}>
      <img src="https://klike.net/uploads/posts/2019-11/1572612050_1.jpg" alt=""/>
      <div>
        ava + description
      </div>
      <MyPosts/>
    </div>
  )
}

export default Profile;