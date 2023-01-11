import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const classItem = `${classes.item} ${classes.active}`;

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classItem}>
        <NavLink to="/profile" className = { (navData) => navData.isActive ? classes.active : classes.item }}>Profile</NavLink>
      </div>
      <div className={classItem}>
        <NavLink to="/dialogs" className = { (navData) => navData.isActive ? classes.active : classes.item }>Messages</NavLink>
      </div>
      <div className={classItem}>
        <NavLink to="/news" className = { (navData) => navData.isActive ? classes.active : classes.item }}>News</NavLink>
      </div>
      <div className={classItem}>
        <NavLink to="/music" className = { (navData) => navData.isActive ? classes.active : classes.item }}>Music</NavLink>
      </div>
      <div className={classItem}>
        <NavLink to="/settings" className = { (navData) => navData.isActive ? classes.active : classes.item }}>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;