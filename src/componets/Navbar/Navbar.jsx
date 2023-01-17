import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const classItem = `${classes.item} ${classes.active}`;

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classItem}>
        <NavLink to="/profile" className = {classes.item}>Profile</NavLink>
      </div>
      <div className={classItem}>
        <NavLink to="/dialogs" className = {classes.item}>Messages</NavLink>
      </div>
      <div className={classItem}>
        <NavLink to="/news" className = {classes.item}>News</NavLink>
      </div>
      <div className={classItem}>
        <NavLink to="/music" className = {classes.item}>Music</NavLink>
      </div>
      <div className={classItem}>
        <NavLink to="/settings" className = {classes.item}>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;