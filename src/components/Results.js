import React, { Component } from 'react'
// import { withRouter } from "react-router-dom";
import styles from "../styles/Results.module.css";

export default class Results extends Component {
  
  handleClick=()=>{
    switch (this.props.which) {
      case 'users':
        console.log('clicked!')
        break;
      default:
        console.log('clicked!')
        break;
    }
  }
  render() {
    let data=[]
    let resultDisplay = <p>"No Results"</p>
    if (this.props.data.data && this.props.data.data !== undefined) {
      data = this.props.data.data
      switch (this.props.which) {
        case 'users':
          if (data.length > 0) {
            resultDisplay=[]
            let i
            for (let user of data){
              resultDisplay.push(
                <div className={styles.result} key={i}>
                  <label>{user.user_login}</label>
                  <img src={user.profile_img_url} alt='profile icon'/>
                  <p>{user.description}</p>
                  {user.tags?<p>tags: {user.tags}</p>:""}
                </div>
              )
              i++
            }
          }
          break;
        case 'twitch':
          if (data.length > 0) {
            data = data[0]
            resultDisplay = (
              <div className={styles.result}>
                <label>{data.display_name}</label>
                <img src={data.profile_image_url} alt='profile icon'/>
                <p>{data.description}</p>
              </div>
            )
          }
          break;
        default:
          break;
      }
    }
    return (
      <div onClick={this.handleClick} className={styles.container}>
        {resultDisplay}
      </div>
    )
  }
}
