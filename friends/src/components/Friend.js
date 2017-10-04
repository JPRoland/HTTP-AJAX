import React, { Component } from 'react';

class Friend extends Component {
  constructor(props) {
    super(props);

    this.state = { friend: {name: '', email: '', age: ''}};
  }

  componentDidMount() {
    this.setState({friend: this.props.friend})
  }

  handleClick = () => {
    this.props.deleteFriend(this.props.idx);
  }

  render() {
    return (
      <li>
        <p>{`Name: ${this.state.friend.name}`}</p>
        <p>{`Age: ${this.state.friend.age}`}</p>
        <p>{`Email: ${this.state.friend.email}`}</p>
        <button onClick={this.handleClick}>Delete</button>
      </li>
    );
  }
};

export default Friend;
