import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
  const path = "/dialogs/" + props.id

  return (
    <div className={classes.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={classes.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  const dialogsData = [
    {id: 'nika', name: 'Nika'},
    {id: 'anna', name: 'anna'},
    {id: 'maxim', name: 'Maxim'},
    {id: 'alex', name: 'Alex'},
    {id: 'luda', name: 'Luda'},
  ];

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>
        <DialogItem name="Nika" id='nika' />
        <DialogItem name="Anna" id='anna' />
        <DialogItem name="Alex" id='alex' />
        <DialogItem name="Luda" id='luda' />
        <DialogItem name="Maxim" id='maxim' />
      </div>
      <div className={classes.messages}>
        <Message message="Hi"/>
        <Message message="How is your"/>
        <Message message="by"/>
        <Message message="hello"/>
        <Message message="good by"/>
      </div>
    </div>
  )
}

export default Dialogs;