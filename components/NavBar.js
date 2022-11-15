import React from 'react'
import Image from 'next/image'
import styles from '../styles/NavBarStyles.module.css';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import useOutsideClick from './useOutsideClick';

export default function NavBar(props) {
    const {width: windowWidth} = useWindowSize();
    const [navBarMenu, setNavBarMenu] = React.useState(false);

    React.useEffect(() => {
        if (windowWidth > 800) {
            setNavBarMenu(false);
        }
        if (windowWidth <= 800) {
            setNavBarMenu(true);
        }
    }, [windowWidth]);  

    const ref = React.useRef();

    useOutsideClick(ref, () => {
        setMenuOpen(false)
    })

    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <div className={styles["nav-bar-container"]}>
            <Link href="/">
                <div className={styles["nav-bar-header"]}>
                    <Image src="/SVGLOGO.png" width={70} height={70} />
                    <div className={styles["nav-bar-title"]}>SmoothSe</div>
                </div>
            </Link>
            
            {navBarMenu ? 
            <div className={styles["nav-bar-menu"]} ref={ref}>
                <FiMenu style={{fontSize: '33px', outline: menuOpen ? "1px solid rgb(150, 150, 150)" : "none", borderRadius: '3px'}} onClick={() => {setMenuOpen(true)}}/>
                {menuOpen &&
                <div className={styles["nav-bar-options-down"]}>
                    <div style={{marginRight: '10px'}}><Link href="/contact"><a style={{color: 'black', textDecoration: 'underline', fontSize: '21px', fontWeight: '500'}}>Contact</a></Link></div>
                    <div style={{marginRight: '10px'}}><Link href="/about"><a style={{color: 'black', textDecoration: 'underline', fontSize: '21px', fontWeight: '500'}}>About Us</a></Link></div>
                    <div className={styles["nav-bar-button"]} onClick={() => {props.setFormOpen(); console.log('f')}} style={{background: '#c37887'}}><div style={{color: 'white', fontSize: '18px', fontWeight: '600', textDecoration: 'none'}}>Newsletter</div></div>
                    <div className={styles["nav-bar-button"]} style={{background: 'black'}}><Link href="/menu"><a style={{color: 'white', fontSize: '18px', fontWeight: '600', textDecoration: 'none'}}>Menu</a></Link></div>
                </div>
                }
            </div> 
            : 
            <div className={styles["nav-bar-options"]}>
                <div style={{marginRight: '10px'}}><Link href="/contact"><a style={{color: 'black', textDecoration: 'none', fontSize: '21px', fontWeight: '500'}}>Contact</a></Link></div>
                <div style={{marginRight: '10px'}}><Link href="/about"><a style={{color: 'black', textDecoration: 'none', fontSize: '21px', fontWeight: '500'}}>About Us</a></Link></div>
                <div className={styles["nav-bar-button"]} onClick={() => {props.setFormOpen(); console.log('f')}} style={{background: '#c37887', cursor: 'pointer'}}><div style={{color: 'white', fontSize: '18px', fontWeight: '600', textDecoration: 'none'}}>Newsletter</div></div>
                <div className={styles["nav-bar-button"]} style={{background: 'black', cursor: 'pointer'}}><Link href="/menu"><a style={{color: 'white', fontSize: '18px', fontWeight: '600', textDecoration: 'none'}}>Menu</a></Link></div>
            </div>
            }
        </div>
    )
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