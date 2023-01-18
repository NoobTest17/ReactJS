import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={classes.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div>New post</div>
      <div className={classes.posts}>
        <Post message='Hi, how are you&' likes='1'/>
        <Post message='its my first post' likes='321'/>
      </div>
    </div>
  )
}

export default MyPosts;