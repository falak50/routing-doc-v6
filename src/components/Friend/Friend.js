import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {id , name,phone, website, address} =props.friend;
    // console.log( name + ' ' + website +'  '+address);
    const friendStyle={
        border : '3px solid goldenrod' ,
        padding : '10px',
        margin : '20px',
        borderRadius : '10px'
    };
    const url = `/friend/${id}`;
    const url1 = `friend`;
 
    const navigate = useNavigate();
    function handleClick() {
        navigate(url);
      }
    
 

    return (
        <div style={friendStyle}>
            <h2>I am : {name}. ID:{id}</h2>
            <h5>Call me : {phone}</h5>
            <p>Visit me : {website}</p>
            <p><small>I live in {address.street}</small></p>
            <Link to={url}>visit me</Link>
            <br />
            <Link to={url}><button>visit me</button></Link>
            <br />
            <button onClick={handleClick}>visit me 2</button>
          

 
          

        </div>
    );
};

export default Friend;