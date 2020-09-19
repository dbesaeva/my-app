import React from 'react';
import c from './MyPosts.module.css'
import Post from './Post/Post.jsx';

const MyPosts = () => {

    let postsData = [
        { likesCount: 12, message: 'hi, how are you' },
        { likesCount: 19, message: 'its my first post' },

    ]
    return (<div className={c.postblock}>
        <h3> My Posts</h3>
        <div>
            <div><textarea> </textarea></div>

            <div><button>add post</button></div>
        </div>
        <div className={c.posts}>
            <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
            <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
            <Post />
            <Post />
            <Post />
        </div>
    </div>
    );
}

export default MyPosts;