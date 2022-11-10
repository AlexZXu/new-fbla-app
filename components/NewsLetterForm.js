import React from 'react'
import styles from '../styles/FormFile.module.css'
import { IoIosCloseCircle } from 'react-icons/io'
export default function NewsLetterForm(props) {
  return (
    <div className={styles["news-form-container"]}>
        <IoIosCloseCircle style={{fontSize: '40px', color: '#c37887', position: 'absolute', right: '10px', top: '10px'}} onClick={() => {props.setFormOpen()}} />
        <div className={styles["news-form-title"]}>
            Sign Up for Announcements
        </div>
        <form className={styles["news-form-main"]}>
            <div>Email</div>
            <input className={styles["news-form-input"]} placeholder="Email"/>
            <div>Name</div>
            <input className={styles["news-form-input"]} placeholder="Name"/>
            <div><button className={styles["news-form-button"]}>Submit</button></div>
        </form>
    </div>
  )
}
