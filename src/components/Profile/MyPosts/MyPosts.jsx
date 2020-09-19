import React from 'react';
import c from './MyPosts.module.css'
import Post from './Post/Post.jsx';

const MyPosts = () => {

    let posts = [
        { likesCount: 12, message: 'hi, how are you' },
        { likesCount: 19, message: 'its my first post' },
    ]

    let postsElements = posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />)

    return (<div className={c.postblock}>
        <h3> My Posts</h3>
        <div>
            <div><textarea> </textarea></div>

            <div><button>add post</button></div>
        </div>
        <div className={c.posts}>
            {postsElements}
        </div>
    </div>
    );
}

export default MyPosts;