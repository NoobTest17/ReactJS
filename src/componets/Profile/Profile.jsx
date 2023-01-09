import React from "react";
import classes from './Profile.module.css';
import {getCLS} from "web-vitals";

const Profile = () => {
  return (
    <div className={classes.content}>
      <img src="https://klike.net/uploads/posts/2019-11/1572612050_1.jpg" alt=""/>
      <div>
        ava + description
      </div>
      <div>
        My posts
        <div>New post</div>
        <div>
          <div className={classes.item}>post 1</div>
          <div className={classes.item}>post 2</div>
        </div>
      </div>
    </div>
  )
}

export default Profile;