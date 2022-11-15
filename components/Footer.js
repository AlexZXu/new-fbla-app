import React from 'react'
import styles from '../styles/FooterFile.module.css'
import { FaCookie } from 'react-icons/fa'
import Link from 'next/link'
export default function Footer() {
  return (
    <div className={styles["footer-container"]}>
        <div className={styles["footer-title"]}>
            SmoothSe
        </div>
        <div style={{marginBottom: '5px'}}>
            Made by <b>Alex Xu</b>
        </div>
        <div style={{marginBottom: '5px'}}>
            All Images Are Sourced From <b>Pexels</b>, a Royalty Free Image Site
        </div>
        <div style={{marginBottom: '5px'}}>
            For Sources and Info: <Link href="https://github.com/AlexZXu/new-fbla-app/blob/master/README.md">Info</Link>
        </div>
        <div>
            You made it to the end, here is a cookie: <FaCookie />
        </div>
    </div>
  )
}
