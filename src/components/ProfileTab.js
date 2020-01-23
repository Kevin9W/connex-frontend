import React, { Component } from 'react'
import onClickOutside from "react-onclickoutside";
import {Link} from 'react-router-dom'
import styles from '../styles/ProfileTab.module.css'

class ProfileTab extends Component{
  state={
    height:"0px",
  }
  handleLogout=()=>{
    this.props.logout()
    this.props.expandProfile()
  }
  handleClickOutside=(event)=>{
    if (event.target.classList[1]!=='profile_icon'){
      if (this.props.profileTab) {
        this.props.expandProfile()
      }
    }
  }
  componentDidUpdate(prevProps){
    if (this.props.profileTab !== prevProps.profileTab){
      this.props.profileTab ? this.setState({ height: "20%" }) : this.setState({ height: "0px" }) 
    }
  }
  render(){
    return (
      <div className={styles.tab} style={{ height:this.state.height}}>
        <Link to="/profile" className={styles.links} onClick={this.props.expandProfile}>
          Profile
        </Link>
        <Link to="/login" className={styles.links} onClick={this.handleLogout}>
          Logout
        </Link>
      </div>
    )
  }
}
export default onClickOutside(ProfileTab)