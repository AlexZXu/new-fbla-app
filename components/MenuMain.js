import React from 'react'
import styles from '../styles/MenuFile.module.css';
import Image from 'next/image';
import MenuItem from './MenuItem';

export default function MenuMain() {
  return (
    <div className={styles["menu-main-container"]}>
        <div className={styles["menu-main-title-container"]}>
            <div className={styles["menu-main-title"]}>
                SmoothSe Menu
            </div>
            <div className={styles["menu-main-subtitle"]}>
                6 Smoothies, More to Come.
            </div>
        </div>
        <MenuItem imageName="CarouselImage1" name="Lotus Green" desc="Made with greens, oats, and a whole lot of kiwi. Spinach, kiwi, and apple is blended to make this." price="$6.00 • 420 cals"/>
        <MenuItem imageName="CarouselImage2" name="Orange Orange" desc="Made with lots of fruits, oats, and oranges. Strawberry, orange, and apples are the key ingredients" price="$5.50 • 480 cals"/>
        <MenuItem imageName="CarouselImage3" name="Red Water" desc="Watermelon carries this drink. This is mainly made with watermelon, milk, and oats" price="$4.40 • 380 cals"/>
        <MenuItem imageName="CarouselImage4" name="Pop Purple" desc="It's purple because of all the plums, blueberries, and blackberries we put in it." price="$6.50 • 450 cals"/>
        <MenuItem imageName="Smoothie1" name="Pink Straws" desc="Strawberries, raspberries, and bananas are blended together. Thissmoothie is silky smooth " price="$5.50 • 500 cals"/>
        <MenuItem imageName="CarouselImage5" name="Tiger Blood" desc="Super Red. Made with raspberries, apple, and strawberries" price="$6.50 • 515 cals"/>
        <div className={styles["menu-more"]}>
            More to come!
        </div>
    </div>
  )
}
