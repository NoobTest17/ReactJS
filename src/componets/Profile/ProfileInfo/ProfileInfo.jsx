import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <img className={classes.imgContent} src="https://klike.net/uploads/posts/2019-11/1572612050_1.jpg" alt=""/>
      <div className={classes.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;