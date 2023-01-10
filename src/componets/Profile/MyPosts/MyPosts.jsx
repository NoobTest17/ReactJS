import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>New post</div>
      <div>
        <Post message='Hi, how are you&'/>
        <Post message='its my first post'/>
      </div>
    </div>
  )
}

export default MyPosts;