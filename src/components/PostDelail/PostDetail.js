import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';

const PostDetail = () => {
    const {postId} = useParams();
    const [post,setPosts]= useState({})
    useEffect(()=>{
     const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
     fetch(url)
     .then(res=>res.json())
     .then(data => setPosts(data));
    },[])
    return (
        <div>
            <h2>post detail : {postId}</h2>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
        </div>
    );
};
<h2>post detail</h2>
export default PostDetail;