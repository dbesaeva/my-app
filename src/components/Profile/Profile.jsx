import React from 'react';
import c from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = () => {
    return(
        <div className={c.content}>
      
        <div>
        <img src='https://c4.wallpaperflare.com/wallpaper/504/736/858/desert-sand-rocks-landscape-wallpaper-preview.jpg'></img>
        </div>
      
        <div>
          ava + description 
          {/*<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScN-Jpgqy1ClBt51AYY_YBiK7kLpvDUzMG_Q&usqp=CAU'></img>*/}
        </div>
        <MyPosts />
        </div>
    );
}

export default Profile;