import React from 'react'
import styles from '../styles/FormFile.module.css'
import { IoIosCloseCircle } from 'react-icons/io'
export default function NewsLetterForm(props) {
  return (
    <div className={styles["news-form-container"]}>
        <IoIosCloseCircle style={{fontSize: '30px', color: '#c37887', position: 'absolute', right: '10px', top: '10px'}} onClick={() => {props.setFormOpen()}} />
        <div className={styles["news-form-text"]}>
          <div className={styles["news-form-title"]}>
              Sign Up for Newsletter
          </div>
          <div className={styles["news-form-desc"]}>Join our community in a new way. Sign up to get info on new community events, deals, and other non-smoothie things!</div>
        </div>
        <form className={styles["news-form-main"]}>
            <div>Email</div>
            <input className={styles["news-form-input"]} placeholder="Email"/>
            <div><button className={styles["news-form-button"]}>Sign Up!</button></div>
        </form>
    </div>
  )
}
