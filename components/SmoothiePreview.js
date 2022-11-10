import React, { useEffect } from 'react'
import styles from '../styles/HeroElement.module.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Fade, Zoom } from 'react-reveal';
import Image from 'next/image';

export default function SmoothiePreview() {
    const [arr, setArr] = React.useState([
        {
            num: -2,
            imageName: '/CarouselImage3.jpg',
            smoothieCaption: 'Red Water'
        },
        {
            num: -1,
            imageName: '/CarouselImage4.jpg',
            smoothieCaption: 'Pop Purple'
        },
        {
            num: 0,
            imageName: '/CarouselImage5.jpg',
            smoothieCaption: 'Red Smooth'
        },
        {
            num: 1,
            imageName: '/CarouselImage1.jpg',
            smoothieCaption: 'Lotus Green'
        },
        {
            num: 2,
            imageName: '/CarouselImage2.jpg',
            smoothieCaption: 'Orange Orange'
        },
        {
            num: 3,
            imageName: '/CarouselImage3.jpg',
            smoothieCaption: 'Red Water'
        },
        {
            num: 4,
            imageName: '/CarouselImage4.jpg',
            smoothieCaption: 'Pop Purple'
        },
        {
            num: 5,
            imageName: '/CarouselImage5.jpg',
            smoothieCaption: 'Red Smooth'
        },
        {
            num: 6,
            imageName: '/CarouselImage1.jpg',
            smoothieCaption: 'Lotus Green'
        },
        {
            num: 7,
            imageName: '/CarouselImage2.jpg',
            smoothieCaption: 'Orange Orange'
        },
    ]);

    const [currentIndex, setCurrentIndex] = React.useState(4);

    const [direction, setDirection] = React.useState(false);

    const [transitionActive, setTransitionActive] = React.useState(true);

    const [canMoveOn, setCanMoveOn] = React.useState(false);

    const [isSmaller, setIsSmaller] = React.useState(false);
    
    const [marginWidth, setMarginWidth] = React.useState();

    const {width: windowWidth} = useWindowSize();

    useEffect(() => {
        const interval = setInterval(() => {
            if (canMoveOn && !document.hidden) {
                setDirection(true);
                setCurrentIndex(prevIndex => prevIndex + 1);
                setTransitionActive(true);
            }

        }, 2200);

        return () => clearInterval(interval);
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCanMoveOn(true);
        }, 700);

        return () => clearInterval(interval);
    });

    useEffect(() => {
        console.log(windowWidth)
        if (windowWidth > 850) {
            setMarginWidth(-52.4);
        }
        if (windowWidth <= 850) {
            setMarginWidth(-83.6);
        }
    }, [windowWidth]);  


    
    return (
      <div className={styles["preview-container"]} style={{position: 'relative'}}>
        <Fade top fraction={0.9}>
            <div className={styles["preview-title-container"]}>
                <h2 className={styles["preview-title"]}>Check out some of our smoothies!</h2>
                <p className={styles["preview-sub-title"]}>Just a small taste of what we have.</p>
            </div>
        </Fade>

        <FiChevronLeft className={styles["preview-carousel-arrow"]} style={{left: '5vw'}} onClick={() => {if (canMoveOn == true) {setDirection(false); setCurrentIndex(prevIndex => prevIndex-1); setTransitionActive(true); setCanMoveOn(false)}}}/>
        <FiChevronRight className={styles["preview-carousel-arrow"]} style={{right: '5vw'}} onClick={() => {if (canMoveOn == true) {setDirection(true); setCurrentIndex(prevIndex => prevIndex+1); setTransitionActive(true); setCanMoveOn(false)}}}/>

        <div className={styles["preview-carousel-container"]}>
            <div className={styles["preview-carousel"]} style={{marginLeft:`${marginWidth * currentIndex}vw`, transition: transitionActive ? 'margin-left 0.7s' : 'margin-left 0s'}} onTransitionEnd={() => {console.log("end"); updatePos()}}>
                {
                    arr.map((obj, index) => (
                        <div className={styles["preview-carousel-item"]} onTransitionEnd={(e) => e.stopPropagation()} onMouseOver={() => {console.log('f')}} key={obj.num}>
                            <Image alt="carousel-1" src={obj.imageName} layout='fill' objectFit= "cover" quality={30}/>
                            <p className={styles["smoothie-caption"]}>{obj.smoothieCaption}</p>
                        </div>

                    ))
                }
            </div>
        </div>


      </div>
    )

    function updatePos () {
        if (currentIndex <= 1) {
            setTransitionActive(false);
            setCurrentIndex(6);
        }
        else if (currentIndex >= 6) {
            setTransitionActive(false);
            setCurrentIndex(1);
        }
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