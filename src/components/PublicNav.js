import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styles from '../styles/PublicNav.module.css'

export default class PublicNav extends Component {
  render() {
    return (
      <div className={styles.buttons}>
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
      </div>
    )
  }
}
