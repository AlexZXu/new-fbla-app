import React from 'react'
import styles from '../styles/FooterFile.module.css'
import { FaCookie } from 'react-icons/fa'
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={styles["footer-container"]}>
        <div>
            <div className={styles["footer-title"]}>
                SmoothSe
            </div>
            <div style={{marginBottom: '1px'}}>
                Made by <b>Alex Xu</b>
            </div>
            <div style={{marginBottom: '1px'}}>
                All Images Are Sourced From <b>Pexels</b>, a Royalty Free Image Site
            </div>
            <div style={{marginBottom: '1px'}}>
                No Templates Were Used
            </div>
            <div style={{marginBottom: '1px'}}>
                For Sources and Info: <Link href="https://github.com/AlexZXu/new-fbla-app/blob/master/README.md">Info</Link>
            </div>
        </div>
        <div>
            <div style={{fontSize: '27px', fontWeight: '600', marginTop: '7spx'}}>
                Company
            </div>
            <div className={styles["footer-buttons"]}>
                <Link href="/about"><a className={styles["footer-button"]}>About</a></Link>
                <Link href="/contact"><a className={styles["footer-button"]}>Contact</a></Link>
                <Link href="/menu"><a className={styles["footer-button"]}>Menu</a></Link>
                <Link href="/cookie"><a className={styles["footer-button"]}><FaCookie style={{fontSize: '16px', marginTop: '3px'}}/></a></Link>
            </div>
            
        </div>
    </div>
  )
}
