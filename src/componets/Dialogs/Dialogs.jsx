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

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
      </div>
      <div className={classes.messages}>
        <Message message={messagesData[0].message}/>
        <Message message={messagesData[0].message}/>
        <Message message={messagesData[0].message}/>
        <Message message={messagesData[0].message}/>
        <Message message={messagesData[0].message}/>
      </div>
    </div>
  )
}

export default Dialogs;