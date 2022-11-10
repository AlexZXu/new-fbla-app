import React from 'react'
import styles from '../styles/AboutFile.module.css';
import Image from 'next/image';
export default function InfoElement() {
  return (
    <div className={styles["info-container"]}>
        <Image src="/SignUpBg.jpg" layout="fill" objectFit='cover'/>s
    </div>
  )
}
