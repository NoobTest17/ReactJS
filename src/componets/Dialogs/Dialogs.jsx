import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

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