import React from 'react'
import styles from '../styles/ServeElement.module.css';
import Fade from 'react-reveal/Fade';
import Image from 'next/image'

export default function FreshElement() {
  return (
    <div className={styles["fresh-container"]}>
        <Fade left fraction={0.6}>
            <div className={styles["fresh-img"]}>
                <Image src="/FreshShop.jpg" layout="fill" objectFit='cover'/>
            </div>
        </Fade>

        <Fade right fraction={0.6}>
            <div className={styles["fresh-text-container"]}>
                <div className={styles["fresh-text"]}>
                    <span>Fresh Produce.</span>
                    <span>Certified Healthy.</span>
                    <span>Just Blended.</span>
                </div>
                <div className={styles["fresh-desc"]}>
                    All our smoothies are made from fresh fruits, sourced by local markets.
                    We have partnered with multiple local supermarkets and farmers markets, so we 
                    can ensure all our smoothies are healthy and tasty.
                </div>
                <button style={{marginTop: '22px', background: 'transparent', fontFamily: 'Inter', height: '44px', fontWeight: '600', width: '165px', fontSize: '17px', borderRadius: '25px', border: 'black 1px solid'}}>See our Menu</button>

            </div>
        </Fade>
        
       
      
    </div>
  )
}
