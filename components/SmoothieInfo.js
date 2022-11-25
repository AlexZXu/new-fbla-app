import React from 'react'
import styles from '../styles/ServeElement.module.css'
import Image from 'next/image';
import { Fade } from 'react-reveal'
import { BsStarFill } from 'react-icons/bs';
import Link from 'next/link';
export default function SmoothieInfo() {
    const [size, setSize] = React.useState(100);
    const [transition, setTransition] = React.useState('height 2s, width 2s');

    React.useEffect(() => {
      window.addEventListener('scroll', calcEnlarge);
    });


    return (
        <div className={styles["serve-container"]} style={{minHeight: '500px'}}>
            <div className={styles["serve-img"]} style={{height: `${size}%`, width:`${size}%`, transition: transition}}>
                <Image src="/InfoImg.jpg" layout='fill' objectFit='cover'/>
            </div>
            <div className={styles["serve-text-container"]} style={{position: 'absolute', height: '100%'}}>
                <div className={styles["serve-text"]}>
                    <Fade left fraction={0.6}>
                        <p className={styles["serve-title"]}>SmoothSe <span style={{color: '#f3e3ff'}}>Stuffs</span></p>
                    </Fade>
                    <Fade left fraction={0.6}>
                        <p className={styles["serve-sub-title"]} style={{fontSize: '29px'}}>
                            Events Coming Up:
                        </p>
                    </Fade>
                    <div className={styles["event-container"]}>
                        <Fade left fraction={0.6}>
                            <div className={styles["event-container-item"]}>
                                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                                    <div>Veterans Day Deal</div>
                                    <div><BsStarFill style={{marginTop: '3px', color: '#7ec5f2'}}/></div>
                                </div>
                            </div>
                        </Fade>
                        <Fade left fraction={0.6}>
                            <div className={styles["event-container-item"]}>
                                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                                    <div>Work and Drink Day</div>
                                    <div><BsStarFill style={{marginTop: '3px', color: '#7ec5f2'}}/></div>
                                </div>
                            </div>
                        </Fade>
                        <Fade left fraction={0.6}>
                            <div className={styles["event-container-item"]}>
                                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                                    <div>Thanksgiving Free Smoothie!</div>
                                    <div><BsStarFill style={{marginTop: '3px', color: '#7ec5f2'}}/></div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
                <div className={styles["serve-sub-container"]}>
                    <Fade left fraction={0.6}>
                        <p className={styles["serve-subtitle"]} style={{padding: '0', marginBottom: '-8px'}}>Our Hours:</p>
                        <p className={styles["serve-address"]}>
                            Open All Week: <span style={{color: '#f3e3ff'}}>8am to 7pm</span>
                        </p>
                        <Link href="/about"><a className={styles["serve-button"]}>About Us</a></Link>
                    </Fade>
                </div>
            </div>
        </div>
    )

    function calcEnlarge () {
        let scrollTop = window.scrollY;
        
        let height = Math.max(100, 100 + (scrollTop - 0.8 * window.innerHeight)/200);
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

