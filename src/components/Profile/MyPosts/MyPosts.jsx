import React from 'react';
import c from './MyPosts.module.css'
import Post from './Post/Post.jsx';

const MyPosts = () => {
    return( <div>
       <Post message='hi, how are you?' likesCount='0'/> 
       <Post message='its my first post' likesCount='19'/>
       <Post />
       <Post />
       <Post />
        </div>
    );
}

export default MyPosts;