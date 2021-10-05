import React, { Component } from 'react'
import styles from "../styles/Results.module.css";

export default class Results extends Component {
  handleClick=()=>{
    switch (this.props.which) {
      case 'users':
        console.log('users!')
        break;
      case 'twitch':
        this.props.history.push({
          pathname: '/details/' + this.props.data.data[0].display_name,
          state:this.props.data.data, 
        })
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
            let i=0
            for (let user of data){
              let tags = user.tags
              if (user.tags.length > 1) {
                tags = tags.join(', ')
              }
              resultDisplay.push(
                <div className={styles.result} key={i}>
                  <label>{user.user_login}</label>
                  <img src={user.profile_img_url} alt='profile icon'/>
                  <p>{user.description}</p>
                  {user.tags?<p>tags: {tags}</p>:""}
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
