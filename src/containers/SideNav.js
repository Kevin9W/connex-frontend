import React, { Component } from 'react'
import onClickOutside from "react-onclickoutside";
import styles from "../styles/SideNav.module.css";

class SideNav extends Component {
  state={
    button:'+',
    width:'0',
  }
  handleClickOutside=()=>{
    this.setState({button:"+"})
  }
  handleButton=()=>{
    switch (this.state.button) {
      case '+':
        this.setState({button:"-"})
        break;
      case '-':
        this.setState({button: "+"})
        break;
      default:
        break;
    }
  }
  componentDidUpdate(prevProps,prevState){
    if (this.state.button !== prevState.button){
      switch (this.state.button) {
        case '+':
          this.setState({ width: '0'})
          break;
        case '-':
          this.setState({ width: '200px'})
          break;
        default:
          break;
      }
    }
  }
  render() {
    return (
      <div>
        <div className={styles.box} style={{width:this.state.width}}>
          <p>Some Text</p>
          <p>Some Text</p>
          <p>Some Text</p>
          <p>Some Text</p>
          <p>Some Text</p>
          <p>Some Text</p>
          <p>Some Text</p>
          <p>Some Text</p>
        </div>
        <button className={styles.button} onClick={this.handleButton}>
          {this.state.button}
        </button>
      </div>
    )
  }
}

export default onClickOutside(SideNav)