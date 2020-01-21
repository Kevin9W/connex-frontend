import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import usersModel from '../models/usersModel'
import styles from '../styles/Login.module.css'

export default class Login extends Component {
  state={
    user_login:"",
    password:"",
    message:"",
    redirect:false,
  }

  handleSubmit=(event)=>{
    event.preventDefault()
    usersModel.login(this.state)
      .then(response => response.json())
      .then(data => {
        if (data.status===400){
          this.setState({message:data.message})
        }
        else{
          this.setState({message: data.message })
          this.props.setCurrentUser(data.signedJwt);
          this.setState({redirect:true})
        }
      })
  }
  
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  render() {
    if(this.state.redirect){
      return <Redirect to='/profile'/>
    }
    return (
      <div className={styles.box}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <h2>Login</h2>
          <label>Username</label>
          <input name="user_login" value={this.state.user_login} onChange={this.handleChange}></input>
          <label>Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
          <button type='submit'>Submit</button>
          <h3>{this.state.message}</h3>
        </form>
      </div>
    )
  }
}
