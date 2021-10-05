import React, { Component } from 'react';
// import { Helmet } from "react-helmet";
import { withRouter } from "react-router-dom";
import styles from './styles/App.module.css'
import Header from './components/Header';
import ProfileTab from "./components/ProfileTab";
import SideNav from './containers/SideNav';
import Footer from './components/Footer';
import Routes from './config/Routes';

class App extends Component{
  state = {
    searchQuery:"",
    user_login:sessionStorage.getItem('user'),
    currentUser: localStorage.getItem('uid'),
    profileTab:false,
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.history.push('/results')
  }
  resetSearch=()=>{
    this.setState({searchQuery:""})
  }
  getSearchQuery=(event)=>{
    this.setState({searchQuery:event.target.value})
  }
  setCurrentUser = (token,user) => {
    this.setState({ currentUser: token, user_login:user})
    localStorage.setItem('uid', token)
    sessionStorage.setItem('user',user)
  };
  expandProfile=()=>{
    this.setState({profileTab:!this.state.profileTab})
  }
  logout = () => {
    localStorage.removeItem('uid');
    sessionStorage.removeItem('user')
    this.setState({ currentUser: null, user_login:null })
  };
  render() {
    return (
      <div className={styles.app}>
        {/* <Helmet>
          <title>ConneX</title>
          <meta name="description" content="Discover if your favorite influencer is on another platform. Connect all your platforms as an influencer in a single spot. ConneX aims to make influencer discoverability across the disparate streaming and social media services easy with one site." />
        </Helmet> */}
        <Header history={this.props.history} currentUser={this.state.currentUser} logout={this.logout} expandProfile={this.expandProfile} getSearchQuery={this.getSearchQuery} makeSearch={this.makeSearch}/>
        <div className={styles.under_nav}>
          <SideNav className={styles.side_nav} />
          <form className={styles.searh_box} onSubmit={this.handleSubmit}>
            <input className={styles.search} placeholder="Search" onChange={this.getSearchQuery} />
          </form>
          <ProfileTab className={styles.profile_tab} profileTab={this.state.profileTab} expandProfile={this.expandProfile} logout={this.logout} />
        </div>
        <main className={styles.content}>
          <Routes 
            getSearchQuery={this.getSearchQuery} 
            setCurrentUser={this.setCurrentUser} 
            searchQuery={this.state.searchQuery} 
            resetSearch={this.resetSearch}
            user_login={this.state.user_login}
          />
        </main>
        <Footer/>
      </div>
    );
  }
}
export default withRouter(App)