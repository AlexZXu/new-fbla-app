import React, { useEffect } from 'react'
import styles from '../styles/HeroElement.module.css';
import { Fade } from 'react-reveal';
import Image from 'next/image';
import { BsArrowDownShort } from 'react-icons/bs';

export default function HeroElement() {
  const [width, setWidth] = React.useState(100);
  const [transition, setTransition] = React.useState("width 4s ease-in-out, height 4s ease-in-out");
  
  useEffect(() => {
    setWidth(prevWidth => prevWidth + 2);
    window.addEventListener('scroll', calcEnlarge);
  }, []);

  return (
    <div className={styles["hero-container"]}>
        <div className={styles["hero-img"]} style={{width: `${width}%`, height: `${width}%`, transition: transition}}>
          <Image src="/HeroImage.jpg" layout="fill" objectFit="cover"/>
        </div>
        <Fade left>
          <h1 className={styles["hero-text"]}>
            <span>Fresh.</span> 
            <span>All Day.</span>
          </h1>
        </Fade>
        <div className={styles["hero-down"]}>
          <BsArrowDownShort />
        </div>
    </div>

  )

  function calcEnlarge () {
    setTransition("width 0.6s ease-out, height 0.6s ease-out");
    let scrollTop = window.scrollY;
    let height = Math.max(108, 108 + (scrollTop)/10)
    setWidth(height);
  }
}
