import React from "react";
import classes from './Navbar.module.css';

const classItem = `${classes.item} ${classes.active}`;

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classItem}>
        <a>Profile</a>
      </div>
      <div className={classItem}>
        <a>Messages</a>
      </div>
      <div className={classItem}>
        <a>News</a>
      </div>
      <div className={classItem}>
        <a>Music</a>
      </div>
      <div className={classItem}>
        <a>Settings</a>
      </div>
    </nav>
  )
}

export default Navbar;