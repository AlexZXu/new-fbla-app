import React from 'react'
import styles from '../styles/FreshStyles.module.css';
import Image from 'next/image';
import { FaCompass } from 'react-icons/fa';
export default function FreshDrinkElement() {


    return (
    <div className={styles["fresh-container"]}>
        <div className={styles["fresh-section"]}>
            <div className={styles["fresh-section-img"]}>
                <Image src="/CarouselImage1.jpg" layout="fill" objectFit='cover'/>
                <div className={styles["fresh-section-text"]}>
                    <div className={styles["fresh-section-title"]}>Our Pledge</div>
                    <div className={styles["fresh-section-desc"]}>
                        <b>We make all our smoothies fresh.</b>
                        We pick out the fruits and veggies.
                        <b>Without adding extra sugars.</b>
                        We add milk, water, or yogurt.
                        <b>We blend it all up.</b>
                        A smoothie is the result.
                    </div>
                </div>
            </div>
        </div>
        <div className={styles["fresh-shop-section"]}>
            <div className={styles["fresh-shop-section-img"]}>
                <Image src="/FreshShop.jpg" layout="fill" objectFit='cover' />
            </div>
            <div className={styles["fresh-shop-section-text"]}>
                <div className={styles["serve-compass"]}>
                  <FaCompass style={{fontSize: '32px', color: 'white'}}/>
                </div>
                <div className={styles["fresh-shop-section-title"]}>Everything Is Fresh.</div>
                <div className={styles["fresh-shop-section-desc"]}>
                    We have partnered with local markets to bring you the freshest produce and therefore the freshest smoothies.

                </div>
            </div>
            <div className={`${styles["fresh-shop-section-img"]} ${styles["fresh-shop-section-temp"]}`}>
                <Image src="/FreshShop2.jpg" layout="fill" objectFit='cover' />
            </div>
        </div>
    </div>
  )
  
}
