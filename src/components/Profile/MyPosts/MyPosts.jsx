import React from 'react';
import c from './MyPosts.module.css'
import Post from './Post/Post.jsx';

const MyPosts = () => {
    return( <div>
       <Post message='hi, how are you?'/> 
       <Post message='its my first post'/>
       <Post />
       <Post />
       <Post />
        </div>
    );
}

export default MyPosts;