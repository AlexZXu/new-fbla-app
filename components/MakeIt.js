import React from 'react'
import styles from '../styles/MakeIt.module.css'
import Image from 'next/image';
import {Fade} from 'react-reveal';
import Link from 'next/link';
export default function MakeIt() {
    const [size, setSize] = React.useState(100);
    const [transition, setTransition] = React.useState('height 2s, width 2s');
  
    React.useEffect(() => {
      window.addEventListener('scroll', calcEnlarge);
    });

    return (
        <div className={styles["main-container"]}>
            <div className={styles["main-img"]} style={{height: `${size}%`, width:`${size}%`, transition: transition}}>
                <Image src="/MakeItImg.jpg" layout='fill' objectFit='cover'/>
            </div>
            <div className={styles["serve-text-container"]}>
            </div>
            <div className={styles["serve-text-real"]}>
                <Fade right fraction={0.4}>
                    <div className={styles["serve-text-section"]}>
                        <p className={styles["serve-title"]}>How We <span style={{color: '#f3e3ff'}}>Make It</span></p>
                        <p className={styles["serve-desc"]}>
                            First, we partner with local markets to bring the freshest produce to the table.
                            Next, we pick out the fruits we need. We add milk, protein, fruits, veggies, and oats in.
                            Finally, we blend it all. These smoothies are all guaranteed fresh and replenishing, providing
                            the calories, protein, and vitamins you need.
                        </p>
                    </div>
                </Fade>

                <Fade right fraction={0.4}>
                    <div className={`${styles["serve-text-section"]} ${styles["serve-menu-section"]}`}>
                        <p className={styles["menu-title"]}>
                            Check out our menu!
                        </p>
                        <Link href="/menu"><a className={styles["serve-button"]}>See Our Menu</a></Link>
                    </div>
                </Fade>
            </div>
        </div>
    )

    
  function calcEnlarge () {
      let scrollTop = window.scrollY;
      
      let height = Math.max(100, 100 + (scrollTop - 0.8 * window.innerHeight)/70);
      setTransition("width 0.6s ease-out, height 0.6s ease-out");
      setSize(height);
    }
  
}
