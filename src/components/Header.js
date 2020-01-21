import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import styles from "../styles/Header.module.css";

export default class Header extends Component{
  state={
    searchQuery:'',
    showSearch:'block',
  }
  handleSubmit=(event)=>{
    event.preventDefault()
    console.log('searching o3o')
    
  }
  handleChange=(event)=>{
    this.setState({searchQuery:event.target.value})
  } 
  render(){
    let links = (
      <>
        <div>
          <Link to='/login'>
            <button className={styles.button}>
              <em>Sign In</em>
            </button>
          </Link>
        </div>
        <div>
          <Link to='/register'>
            <button className={styles.button}>
              <em>Sign Up</em>
            </button>
          </Link>
        </div>
      </>
    )
    let privateLinks = (
        <button className={[styles.profile_icon, 'profile_icon'].join(' ')} onClick={this.props.expandProfile}>
          {/* <image src=""/> */}
        </button>
    )
    return (
      <header className={styles.top_nav}>
        <div className={styles.home}>
          <Link to='/'>
            <h2 className={styles.home_button}><em>ConneX</em></h2>
          </Link>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input className={styles.search} style={{ display: this.state.showSearch }} placeholder="Search" onChange={this.props.getSearchQuery}></input>
        </form>
        <nav className={styles.nav_buttons}>
          {this.props.currentUser ? privateLinks : links}
        </nav>
      </header>
    )
  }
}