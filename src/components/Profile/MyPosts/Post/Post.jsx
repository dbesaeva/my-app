import React from 'react';
import c from './Post.module.css'

const Post = () => {
    return( <div>
            <div className={c.item}>
                
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQt86sQ9Ya33SIwiA1tc4FGlpq1jqhimI_XVw&usqp=CAU'></img>
              post 1
              <div>
                  <span>like</span>
              </div>
            </div>
        </div>
    );
}

export default Post;