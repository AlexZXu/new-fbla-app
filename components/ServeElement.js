import React, { useEffect } from 'react'
import styles from '../styles/ServeElement.module.css';
import Fade from 'react-reveal';
import { useInView } from 'react-intersection-observer';
import { FaCompass } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function ServeElement() {
  const { ref: myRef, inView, entry } = useInView({
    threshold: 0
  });
  const [size, setSize] = React.useState(100);
  const [transition, setTransition] = React.useState('height 2s, width 2s');

  useEffect(() => {
    window.addEventListener('scroll', calcEnlarge);
  });

  return (
      <div ref={myRef} className={styles["serve-container"]}>
        <div className={styles["serve-img"]} style={{height: `${size}%`, width:`${size}%`, transition: transition}}>
          <Image src="/ShopInterior.jpg" layout='fill' objectFit='cover'/>
        </div>
          <div className={styles["serve-text-container"]} style={{position: 'absolute', height: '100%'}}>
            <Fade left fraction={0.6}>
              <div className={styles["serve-text"]}>
                <p className={styles["serve-title"]}>Serving <span style={{color: '#f3e3ff'}}>Somewhereland</span></p>
                <p className={styles["serve-sub-title"]}>4 years and counting...</p>
              </div>
            </Fade>
            <div className={styles["serve-sub-container"]}>
              <Fade left fraction={0.6}>
                <div className={styles["serve-compass"]}>
                  <FaCompass style={{fontSize: '32px', color: 'white'}}/>
                </div>
                <p className={styles["serve-subtitle"]} style={{padding: '0', marginBottom: '-8px'}}>Come see us:</p>
                <p className={styles["serve-address"]}>345 Smooth Ave., Somewhereland, MA 45911</p>
                <Link href="https://www.google.com/maps"><a className={styles["serve-button"]} style={{width: '200px'}}>See Us On Google</a></Link>
              </Fade>
            </div>
          </div>
      </div>
    
  )

  function calcEnlarge () {
    if (inView == true) {
      let scrollTop = window.scrollY;
      
      let height = Math.max(100, 100 + (scrollTop - 0.8 * window.innerHeight)/70);
      setTransition("width 0.6s ease-out, height 0.6s ease-out");
      setSize(height);
    }
  }

}
