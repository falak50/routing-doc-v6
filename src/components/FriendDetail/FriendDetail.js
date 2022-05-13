import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FriendDetail = () => {
    // const params = useParams();
    // console.log(params);
    const {friendId} = useParams();
    //console.log(friendId);
    const [friend,setFriend] = useState({})
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
    },[])

    
    const navigate = useNavigate();
   
    return (
        <div>
            <h3>Delail coming soon : {friendId}</h3>
            <h1>{friend.name}</h1>
            <h2>{friend.phone}</h2>
            <h4>{friend.website}</h4>
            <p>Works at : {friend.company?.name}</p>
            <button onClick={() => navigate(-1)}>
            Go 1 pages back or all friends
             </button>
        </div>
    );
};

export default FriendDetail;