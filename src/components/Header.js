import React, { Component } from 'react'
import PublicNav from './PublicNav'
import {Link} from 'react-router-dom'
import styles from "../styles/Header.module.css";

export default class Header extends Component {
  render() {
    return (
      <nav className={styles.top_nav}>
        <div className={styles.home}>
          <Link to='/'>
            <h2 className={styles.home_button}><em>ConneX</em></h2>
          </Link>
        </div>
        <div className={styles.nav_buttons} >
          <PublicNav/>
        </div>
      </nav>
    )
  }
}
