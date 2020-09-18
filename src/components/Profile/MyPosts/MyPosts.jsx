import React from 'react';
import c from './MyPosts.module.css'
import Post from './Post/Post.jsx';

const MyPosts = () => {
    return( <div className={c.postblock}>
        <h3> My Posts</h3>
        <div> 
            <div><textarea> </textarea></div>

            <div><button>add post</button></div>
        </div>
        <div className={c.posts}>
       <Post message='hi, how are you?' likesCount='0'/> 
       <Post message='its my first post' likesCount='19'/>
       <Post />
       <Post />
       <Post />
       </div>
        </div>
    );
}

export default MyPosts;