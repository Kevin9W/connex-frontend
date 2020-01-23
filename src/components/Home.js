import React, { Component } from 'react'
import styles from '../styles/Home.module.css'
import { Redirect } from 'react-router-dom'

export default class Home extends Component {
  state={
    redirect:false,
  }
  handleSubmit=(event)=>{
    event.preventDefault()
    this.setState({redirect:true})
  }
  render(){
    if (this.state.redirect) {
      return <Redirect to='/results' />
    }
    return (
      <div className={styles.home}>
        <h1><em>Welcome to Whoops</em></h1>
        <form onSubmit={this.handleSubmit}>
          <input className={styles.search} placeholder="Search" onChange={this.props.getSearchQuery}/>
        </form>
        <p>Search for your favorite influencers from various social media sites like Twitch, Youtube, Twitter, etc.</p>
      </div>
    )
  }
}
