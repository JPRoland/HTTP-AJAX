import React from 'react';
import Friend from './Friend';

const FriendsList = (props) => {
  return (
    <div>
      <ul>
        {props.friends.map((friend, i) =>{
          return (
            <Friend friend={friend} idx={i} key={i} deleteFriend={props.deleteFriend}/>
          );
        })}
      </ul>
    </div>
  );
}

export default FriendsList;
