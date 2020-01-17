import React, { Component } from 'react'
import usersModel from '../models/usersModel'

export default class Login extends Component {
  state={
    user_login:"",
    password:""
  }

  handleSubmit=(event)=>{
    event.preventDefault()
    usersModel.login(this.state)
      .then(response => response.json())
      .then(data => {
        console.log("Success")
        this.props.setCurrentUser(data.signedJwt);
      })
  }
  
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ border: "solid black 2px" }}>
        <h2>Login</h2>
        <label>Username</label>
        <input name="user_login" value={this.state.user_login} onChange={this.handleChange}></input>
        <label>Password</label>
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
