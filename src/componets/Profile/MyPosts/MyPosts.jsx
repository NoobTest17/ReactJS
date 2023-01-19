import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
  const postsData = [
    {id: 1, text: 'Hi, how are you&', likes: 12},
    {id: 2, text: 'its my first post&', likes: 313131}
  ]

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
        <Post message={postsData[0].text} likes={postsData[0].likes}/>
        <Post message={postsData[1].text} likes={postsData[1].likes}/>
      </div>
    </div>
  )
}

export default MyPosts;