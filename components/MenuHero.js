import React from 'react'
import styles from '../styles/MenuFile.module.css';
import Image from 'next/image';
import { Fade } from 'react-reveal';
export default function MenuHero() {

    const [width, setWidth] = React.useState(100);
    const [transition, setTransition] = React.useState("width 3s ease-in-out, height 3s ease-in-out");
    
    React.useEffect(() => {
        setWidth(prevWidth => prevWidth + 2);
        window.addEventListener('scroll', calcEnlarge);
    }, []);

    return (
        <div className={styles["menu-hero-container"]}>
            <div className={styles["hero-img"]} style={{width: `${width}%`, height: `${width}%`, transition: transition}}>
                <Image src="/SignUpBg.jpg" layout="fill" objectFit="cover"/>
            </div>
            <Fade left>
                <div className={styles["hero-text-container"]}>
                    <h1 className={styles["hero-title"]}>SmoothSe : <span style={{color: '#f3e3ff'}}>Menu</span></h1>
                </div>
            </Fade>
        </div>
    )

    
    function calcEnlarge () {
        setTransition("width 0.6s ease-out, height 0.6s ease-out");
        let scrollTop = window.scrollY;
        let height = Math.max(105, 105 + (scrollTop)/10)
        setWidth(height);
    }
}
