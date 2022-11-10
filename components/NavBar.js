import React from 'react'
import Image from 'next/image'
import styles from '../styles/NavBarStyles.module.css';
import Link from 'next/link';
export default function NavBar(props) {

    return (
        <div className={styles["nav-bar-container"]}>
            <Link href="/">
                <div className={styles["nav-bar-header"]}>
                    <Image src="/SVGLOGO.png" width={70} height={70} />
                    <div className={styles["nav-bar-title"]}>SmoothSe</div>
                </div>
            </Link>


            <div className={styles["nav-bar-options"]}>
                <div style={{marginRight: '10px'}}><Link href="/contact"><a style={{color: 'black', textDecoration: 'none', fontSize: '21px', fontWeight: '500'}}>Contact</a></Link></div>
                <div style={{marginRight: '10px'}}><Link href="/about"><a style={{color: 'black', textDecoration: 'none', fontSize: '21px', fontWeight: '500'}}>About Us</a></Link></div>
                <div className={styles["nav-bar-button"]} onClick={() => {props.setFormOpen(); console.log('f')}} style={{background: '#c37887'}}><div style={{color: 'white', fontSize: '18px', fontWeight: '600', textDecoration: 'none'}}>Newsletter</div></div>
                <div className={styles["nav-bar-button"]} style={{background: 'black'}}><Link href="/menu"><a style={{color: 'white', fontSize: '18px', fontWeight: '600', textDecoration: 'none'}}>Menu</a></Link></div>
            </div>
        </div>
    )
}
