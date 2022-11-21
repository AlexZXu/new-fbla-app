import React from 'react'
import styles from '../styles/ContactFile.module.css';
import Image from 'next/image';
import { Fade } from 'react-reveal';

export default function ContactForm() {
  return (
    <div className={styles["contact-form-container"]}>
      <div className={styles["contact-form"]}>
        <Fade left>
          <div className={styles["contact-form-title"]}>Contact Us</div>
        </Fade>
        <Fade left>
        <form>
            <div className={styles["contact-form-input-title"]}>Name</div>
            <input className={styles["contact-form-input"]} placeholder="Name"></input>
            <div className={styles["contact-form-input-title"]}>Email</div>
            <input className={styles["contact-form-input"]} placeholder="Email"></input>
            <div className={styles["contact-form-input-title"]}>Note</div>
            <textarea className={styles["contact-form-input"]} placeholder="Note" style={{resize: 'none', paddingTop: '10px', height: '90px'}}></textarea>
            <button style={{fontFamily: 'Inter', width: '110px', height: '36px', fontWeight: '600', fontSize: '20px', color: 'rgb(190, 90, 111)', borderRadius: '25px', border: 'none'}}>Send</button>
        </form>
        </Fade>
        
      </div>
      <div className={styles["contact-form-img"]}>
        <Image src="/CarouselImage4.jpg" layout='fill' objectFit='cover' />
      </div>
        
    </div>
       
  )
}
