import React from 'react';
import c from './MyPosts.module.css'
import Post from './Post/Post.jsx';

const MyPosts = (props) => {

    let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />)

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