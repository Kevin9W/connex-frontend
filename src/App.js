import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import Register from './components/Register'
import Login from './components/Login'

export default class App extends Component{
  state = {
    currentUser: localStorage.getItem('uid'),
  };

  setCurrentUser = (token) => {
    this.setState({ currentUser: token })
    localStorage.setItem('uid', token)
  };
  logout = () => {
    localStorage.removeItem('uid');
    this.setState({ currentUser: null })
    this.props.history.push('/login')
  };
  render() {
    return (
      <div className="app">
        <Helmet>
          <title>ConneX</title>
          <meta name="description" content="Discover if your favorite influencer is on another platform. Connect all your platforms as an influencer in a single spot. ConneX aims to make influencer discoverability across the disparate streaming and social media services easy with one site." />
        </Helmet>
        <Login setCurrentUser={this.setCurrentUser}/>
        <Register />
      </div>
    );
  }
}
  