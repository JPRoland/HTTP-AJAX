import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';

export const getFriends = () => {
  const promise = axios.get('http://localhost:5000/friends');
  return {
    type: GET_FRIENDS,
    payload: promise
  };
};

export const addFriend = (friend) => {

  return {
    type: ADD_FRIEND,
    payload: axios.post('http://localhost:5000/new-friend', friend)
  };
};

export const deleteFriend = (index) => {

  return {
    type: DELETE_FRIEND,
    payload: axios.delete('http://localhost:5000/delete-friend', {data: {index}})
  }
};
