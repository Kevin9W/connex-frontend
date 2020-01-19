import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Route,Switch } from "react-router-dom";
import styles from './styles/App.module.css'
import Register from './components/Register'
import Login from './components/Login'
import Header from './components/Header';

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
      <div className={styles.app}>
        <Helmet>
          <title>ConneX</title>
          <meta name="description" content="Discover if your favorite influencer is on another platform. Connect all your platforms as an influencer in a single spot. ConneX aims to make influencer discoverability across the disparate streaming and social media services easy with one site." />
        </Helmet>
        <Header/>
        <Switch>
          <div className={styles.content}>
            <Route exact path="/register"
              render={props => <Login{...props} setCurrentUser={this.setCurrentUser}/>}
            />            
            <Register />
          </div>
        </Switch>
        
      </div>
    );
  }
}
  