import React from 'react'
import styles from '../styles/ServeElement.module.css';
import Image from 'next/image';

export default function SmoothiesServed() {
  return (
    <div className={styles["served-container"]}>
      <Image src="/HeroImage.jpg" layout="fill" objectFit='cover'/>
      <div className={styles["served-text-container"]}>
        <h1 className={styles["served-title"]}>13601</h1>
        <p className={styles["served-sub"]}>smoothies served</p>
      </div>
    </div>
  )
}
