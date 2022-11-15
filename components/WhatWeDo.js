import React from 'react'
import styles from '../styles/AboutFile.module.css';
import Image from 'next/image';
import { FiArrowDown } from 'react-icons/fi'
import { Fade } from 'react-reveal'
export default function WhatWeDo() {
  return (
    <div className={styles["do-container"]}>
        <div className={styles["do-text-container"]}>
            <Fade left fraction={0.3}>
                <div className={styles["do-text-sub"]}>
                    About Us
                </div>
                <div className={styles["do-text-desc"]}>
                    We are SmoothSe, the freshest smoothie shop in all of Somewhereland. It was our idea to create a social place
                    where people can come to work, to chat, or just to relax. Come order a smoothie and do whatever you
                    desire.
                </div>
            </Fade>
            <FiArrowDown style={{fontSize: '35px', marginBottom: '8px'}} />
        </div>
        <div className={styles["do-img"]}>
            <Image src="/TwitPic3.jpg" layout='fill' objectFit='cover'/>
            <div className={styles["do-img-text"]}>One Of Our Smoothies</div>
        </div>
    </div>
  )
}
