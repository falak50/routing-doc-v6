import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Friend from '../Friend/Friend';
import './Friends.css';

const Friends = () => {
    const [friends,setfriends] = useState([]);
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data => setfriends(data));

    },[])
    return (
        <div>
            <h1>Friends</h1>
            <h1>number : {friends.length}</h1>
            <div className="friend-container">
            
            {
             friends.map(x => <Friend key={x.id} friend={x}></Friend>)
            }
            </div>
          
        </div>
    );
};

export default Friends;