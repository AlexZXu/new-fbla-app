import React from 'react'
import styles from '../styles/ContactFile.module.css';
import Image from 'next/image';

export default function ContactForm() {
  return (
    <div style={{background: '#003459'}}>
        <div className={styles["contact-form-container"]}>
            <div className={styles["contact-form-title"]}>Contact Us:</div>
            <form>
                <div className={styles["contact-form-input-title"]}>Name</div>
                <input className={styles["contact-form-input"]} placeholder="Name"></input>
                <div className={styles["contact-form-input-title"]}>Email</div>
                <input className={styles["contact-form-input"]} placeholder="Email"></input>
                <div className={styles["contact-form-input-title"]}>Suggestion</div>
                <input className={styles["contact-form-input"]} placeholder="Suggestion"></input>
                <button style={{fontFamily: 'Inter', background: 'none', border: '1px solid gray', color: 'white', paddingLeft: '25px', paddingRight: '25px', paddingTop: '5px', paddingBottom: '5px', borderRadius: '10px', fontSize: '18px', marginTop: '-5px'}}>Send</button>
            </form>
        </div>
       
    </div>
  )
}
