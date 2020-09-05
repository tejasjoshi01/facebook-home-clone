import React, { useEffect, useState } from 'react'; 
import './Feed.css'; 

import StoryReel from './StoryReel.js'
import MessageSender from './MessageSender.js';
import Post from './Post.js'

import db from './firebase';

// data hook import  .
import { useStateValue } from './StateProvider'



function Feed() {
     const [posts, setPosts] = useState([]);

     useEffect(() => {
          db.collection("posts").orderBy('timestamp', 'desc')
               .onSnapshot((snapshot) =>
                    setPosts(snapshot.docs.map((doc) => ({ doc: doc.id , data: doc.data() })))
                    );
     }, [])

     return (
      <div className='feed'>
               <StoryReel/>
               <MessageSender/>

               {posts.map((post) => (
                    <Post 
                         key={post.id}
                         profilePic={post.data.profilePic}
                         message={post.data.message}
                         timestamp={post.data.timestamp}
                         username={post.data.username}
                         image={post.data.image}
                    />
               ))} 
      </div>
     )
}

export default Feed;