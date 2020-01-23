import React, { Component } from 'react';
import usersModel from '../models/usersModel'
import styles from "../styles/Register.module.css";
import { Redirect } from 'react-router-dom';

export default class Register extends Component {
  state = { 
    user_login:'',
    email:'',
    password:'',
    password2:'',
    errors:null,
    redirect:false,
   }

  handleSubmit=(event)=>{
    event.preventDefault()
    usersModel.register(this.state)
      .then(response=>response.json())
      .then(data=>{
        this.setState({errors:data.errors},()=>{
          console.log(data)
          if (this.state.errors == null) {
            this.props.setCurrentUser(data.signedJwt,data.user_login)
            this.setState({redirect:true})
          }
        })
      })
    
  }

  handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})
  }

  render() { 
    if(this.state.redirect){
      return <Redirect to='./profile'/>
    }
    return ( 
      <div className={styles.box}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <h2>Register</h2>
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
      </div>
     );
  }
}