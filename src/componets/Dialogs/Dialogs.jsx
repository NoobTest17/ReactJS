import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  const messageElements = props.messagesData.map((item) => <Message message={item.message}/>)
  const dialogsElements = props.dialogsData.map((item) => <DialogItem name={item.name} id={item.id} />);

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