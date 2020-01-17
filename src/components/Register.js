import React, { Component } from 'react';
import usersModel from '../models/usersModel'

class Register extends Component {
  state = { 
    user_login:'',
    email:'',
    password:'',
    password2:'',
   }

  handleSubmit=(event)=>{
    event.preventDefault()
    usersModel.register(this.state)
  }

  handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})
  }

  render() { 
    return ( 
      <form onSubmit={this.handleSubmit}>
        <label>Username</label>
        <input name="user_login" value={this.state.user_login} onChange={this.handleChange} required></input>
        <label>Email</label>
        <input name="email" value={this.state.email} onChange={this.handleChange} required></input>
        <label>Password</label>
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required></input>
        <label>Confirm Password</label>
        <input type="password" name="password2" value={this.state.password2} onChange={this.handleChange} required></input>
        <button type="submit">Submit</button>
      </form>
     );
  }
}
 
export default Register;