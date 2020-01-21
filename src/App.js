import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Route,Switch } from "react-router-dom";
import styles from './styles/App.module.css'
import Home from "./components/Home";
import Header from './components/Header';
import ProfileTab from "./components/ProfileTab";
import SideNav from "./containers/SideNav";
import Login from './components/Login'
import Register from './components/Register'
import Footer from './components/Footer';

export default class App extends Component{
  state = {
    currentUser: localStorage.getItem('uid'),
    searchQuery:null,
    profileTab:false,
  };
  getSearchQuery=(event)=>{
    this.setState({searchQuery:event.target.value})
  }
  setCurrentUser = (token) => {
    this.setState({ currentUser: token })
    localStorage.setItem('uid', token)
  };
  expandProfile=()=>{
    this.setState({profileTab:!this.state.profileTab})
  }
  logout = () => {
    localStorage.removeItem('uid');
    this.setState({ currentUser: null })
  };
  render() {
    return (
      <div className={styles.app}>
        <Helmet>
          <title>ConneX</title>
          <meta name="description" content="Discover if your favorite influencer is on another platform. Connect all your platforms as an influencer in a single spot. ConneX aims to make influencer discoverability across the disparate streaming and social media services easy with one site." />
        </Helmet>
        <Header currentUser={this.state.currentUser} logout={this.logout} expandProfile={this.expandProfile}/>
        <div className={styles.under_nav}>
          <SideNav className={styles.side_nav} />
          <ProfileTab className={styles.profile_tab} profileTab={this.state.profileTab} expandProfile={this.expandProfile} logout={this.logout} />
        </div>
        <main className={styles.content}>
          <Switch>
            <Route exact path="/"
              render={props => <Home{...props} getSearchQuery={this.getSearchQuery} />} />
            <Route exact path="/login"
              render={props => <Login{...props} setCurrentUser={this.setCurrentUser} />} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </main>
        <Footer/>
      </div>
    );
  }
}
  