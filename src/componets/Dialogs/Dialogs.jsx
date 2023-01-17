import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/maxim">Maxim</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/nika">Nika</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/anna">Anna</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/alex">Alex</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialogs/luda">Luda</NavLink>
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hi</div>
        <div className={classes.message}>How is your?</div>
        <div className={classes.message}>by</div>
        <div className={classes.message}>hello</div>
        <div className={classes.message}>good by</div>
      </div>
    </div>
  )
}

export default Dialogs;