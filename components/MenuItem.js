import React from 'react'
import styles from '../styles/MenuFile.module.css';
import Image from 'next/image';
export default function MenuItem(props) {
  const nameString = `/${props.imageName}.jpg`;

  return (
    <div className={styles["menu-item-container"]}>
        <div className={styles["menu-item-img"]}>
            <Image src={nameString} layout='fill' objectFit='cover'/>
        </div>
        <div className={styles["menu-item-text"]}>
            <div className={styles["menu-item-name"]}>
                {props.name}
            </div>
            <div className={styles["menu-item-desc"]}>
                {props.desc}
            </div>
            <div className={styles["menu-item-price"]}>
                {props.price}
            </div>
        </div>
    </div>
  )
}
