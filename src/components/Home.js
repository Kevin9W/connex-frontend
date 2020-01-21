import React, { Component } from 'react'
import styles from '../styles/Home.module.css'


export default class Home extends Component {
  handleSubmit=(event)=>{
    event.preventDefault()
    console.log('searching!')
  }
  render() {
    return (
      <div className={styles.home}>
        <h1>Welcom to ConneX</h1>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Search" onChange={this.props.getSearchQuery}/>
          <button type='submit'>Submit</button>
        </form>
        <p>Search for your favorite influencers from various social media sites like Twitch, Youtube, Twitter, etc.</p>
      </div>
    )
  }
}
