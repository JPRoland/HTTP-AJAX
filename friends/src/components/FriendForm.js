import React, { Component } from 'react';

class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      age: '',
      id: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({id: Date.now()});
    this.props.submit(this.state);
    this.setState({name: '', email: '', age: '', id: ''});
    e.target.reset();
  }

  handleChange = (e) => {
    const target = e.target;
    this.setState({
      [target.name]: target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
        <input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange}/>
        <input type="text" placeholder="Age" name="age" value={this.state.age} onChange={this.handleChange}/>
        <button>Add Friend</button>
      </form>
    )
  }
};

export default FriendForm;
