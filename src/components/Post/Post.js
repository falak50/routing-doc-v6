import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = (props) => {
  const  {title,id} = props.post;

  const url = `/post/${id}`;
  const navigate = useNavigate();
  function handleClick() {
      navigate(url);
    }
  
  
    return (
        <div>
          
           <h2>{title}</h2>
           <Link to={`/post/${id}`}>Post Detail by link </Link>
           <br/>
           <button onClick={handleClick}>click to see the delails button</button>

        </div>
    );
};

export default Post;