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
    {id: 'nika',  name: 'Nika'},
    {id: 'anna',  name: 'anna'},
    {id: 'maxim', name: 'Maxim'},
    {id: 'alex',  name: 'Alex'},
    {id: 'luda',  name: 'Luda'},
  ];
  const messagesData = [
    {id: 1, message: 'Hi'},
    {id: 1, message: 'Hi'},
    {id: 1, message: 'Hi'},
    {id: 1, message: 'Hi'},
    {id: 1, message: 'Hi'},
  ];
  const messageElements = messagesData.map((item) => <Message message={item.message}/>)
  const dialogsElements = dialogsData.map((item) => <DialogItem name={item.name} id={item.id} />);

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messageElements}
      </div>
    </div>
  )
}

export default Dialogs;