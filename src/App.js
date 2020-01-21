import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Route,Switch } from "react-router-dom";
import styles from './styles/App.module.css'
import Home from "./components/Home";
import Header from './components/Header';
import SideNav from "./containers/SideNav";
import Login from './components/Login'
import Register from './components/Register'

export default class App extends Component{
  state = {
    currentUser: localStorage.getItem('uid'),
    searchQuery:null,
  };
  getSearchQuery=(event)=>{
    this.setState({searchQuery:event.target.value})
  }
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
        <SideNav className={styles.side_nav}/>
        <Switch>
          <div className={styles.content}>
            <Route exact path="/" 
              render={props=> <Home{...props} getSearchQuery={this.getSearchQuery}/>}/>
            <Route exact path="/login"
              render={props => <Login{...props} setCurrentUser={this.setCurrentUser}/>}/>            
            <Route exact path="/register" component={Register}/>
          </div>
        </Switch>
        
      </div>
    );
  }
}
  