import React from 'react'
import styles from '../styles/ServeElement.module.css'
import Image from 'next/image';
import { Fade } from 'react-reveal'

export default function SmoothieInfo() {
    const [size, setSize] = React.useState(100);
    const [transition, setTransition] = React.useState('height 2s, width 2s');
    const {width: windowWidth} = useWindowSize();

    React.useEffect(() => {
      window.addEventListener('scroll', calcEnlarge);
    });


    return (
        <div className={styles["serve-container"]}>
            <div className={styles["serve-img"]} style={{height: `${size}%`, width:`${size}%`, transition: transition}}>
                <Image src="/InfoImg.jpg" layout='fill' objectFit='cover'/>
            </div>
            <div className={styles["serve-text-container"]} style={{position: 'absolute', height: '100%'}}>
                <Fade left fraction={0.6}>
                <div className={styles["serve-text"]}>
                    <p className={styles["serve-title"]}>SmoothSe <span style={{color: '#f3e3ff'}}>Stuffs</span></p>
                    <p className={styles["serve-sub-title"]} style={{fontSize: '29px'}}>
                        Events Coming Up:
                    </p>
                    <div className={styles["event-container"]}>
                        <div className={styles["event-container-item"]}>Veterans Day Deal!</div>
                        <div className={styles["event-container-item"]}>Work and Drink Day</div>
                        <div className={styles["event-container-item"]}>Thanksgiving Free Smoothie</div>
                    </div>
                </div>
                </Fade>
                <div className={styles["serve-sub-container"]}>
                    <Fade left fraction={0.6}>
                        <p className={styles["serve-subtitle"]} style={{padding: '0', marginBottom: '-8px'}}>Our Hours:</p>
                        <p className={styles["serve-address"]}>
                            Open All Week: <span style={{color: '#f3e3ff'}}>8am to 7pm</span>
                        </p>
                        <button className={styles["serve-button"]} style={{fontSize: '19px', width: '150px'}}>About Us</button>
                    </Fade>
                </div>
            </div>
        </div>
    )

    function calcEnlarge () {
        let scrollTop = window.scrollY;
        
        let height = Math.max(100, 100 + (scrollTop - 0.8 * window.innerHeight)/400);
        setTransition("width 0.6s ease-out, height 0.6s ease-out");
        setSize(height);
    }
}

function useWindowSize() {
    const [windowSize, setWindowSize] = React.useState({
      width: undefined,
      height: undefined,
    });
  
    React.useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      window.addEventListener("resize", handleResize);
       
      handleResize();
      
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }

