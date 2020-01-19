import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styles from "../styles/Header.module.css";

export default class Header extends Component {
  render() {
    return (
      <nav className={styles.top_nav}>
        <div className={styles.home}>
          <Link>
            <h2 className={styles.home_button}>ConneX</h2>
          </Link>
        </div>
        <div className={styles.nav_buttons}>
          <button className={styles.button}>
            Sign In
          </button>
        </div>
        <div>
          <button className={styles.button}>
            Sign Up
          </button>
        </div>
      </nav>
    )
  }
}
