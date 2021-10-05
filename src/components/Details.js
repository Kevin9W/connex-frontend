import React, { Component } from 'react'
import searchModel from "../models/searchModel";
import styles from "../styles/Details.module.css";

export default class Details extends Component {
  state = {
    data:null,
    metadata:{
      data:[null]
    },
  }
  componentDidMount(){
    this.setState({data:this.props.history.location.state})
    searchModel.searchMetaTwitch(this.props.history.location.state[0].id)
      .then(response => response.json())
      .then(metadata => this.setState({metadata}))
    
  }
  render() {
    let content=null
    if (this.state.data){
      let twitchUrl = 'https://twitch.tv/' + this.state.data[0].login
      content = (
        <div className={styles.container}>
          <h2>{this.state.data[0].display_name}</h2>
          <img src={this.state.data[0].profile_image_url} alt='profile icon' />
          <p>{this.state.data[0].description}</p>
          {this.state.metadata.data[0]?
          <>
              <p>{this.state.data[0].display_name + " is " + this.state.metadata.data[0].type + "!"}</p>
            <p>{this.state.metadata.data[0].title}</p>
          </>
            : <p>{this.state.data[0].display_name+" is offline!"}</p>}
          <a href={twitchUrl} target='_blank'>{twitchUrl}</a>
        </div>
      )
    }
    
    return (
      <>
        {this.state.data? 
        content
        : 'Loading...'}
      </>
    )
  }
}
