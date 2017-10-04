import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getFriends, addFriend, deleteFriend } from './actions';

import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
        <FriendForm submit={this.props.addFriend}/>
        <FriendsList friends={this.props.friends} deleteFriend={this.props.deleteFriend}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  friends: state.friends
});

export default connect(mapStateToProps, {getFriends, addFriend, deleteFriend})(App);
