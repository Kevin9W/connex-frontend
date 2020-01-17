import React, { Component } from 'react';
import usersModel from '../models/usersModel'

export default class Register extends Component {
  state = { 
    user_login:'',
    email:'',
    password:'',
    password2:'',
    errors:null
   }

  handleSubmit=(event)=>{
    event.preventDefault()
    usersModel.register(this.state)
      .then(response=>response.json())
      .then(error=>{
        this.setState({errors:error.errors});
        console.log(error)})
  }
  handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})
  }

  render() { 
    return ( 
      <form onSubmit={this.handleSubmit} style={{border:"solid black 2px"}}>
        <label>Username</label>
        <input name="user_login" value={this.state.user_login} onChange={this.handleChange}></input>
        <label>Email</label>
        <input name="email" value={this.state.email} onChange={this.handleChange}></input>
        <label>Password</label>
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
        <label>Confirm Password</label>
        <input type="password" name="password2" value={this.state.password2} onChange={this.handleChange}></input>
        <button type="submit">Submit</button>
      </form>
     );
  }
}