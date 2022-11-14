import React from 'react'
import styles from '../styles/CommunityStyles.module.css';
import Image from 'next/image';
import { FaTwitter } from 'react-icons/fa';
export default function MediaElement(props) {
    const nameString = `/${props.imageName}.jpg`;
    const profileString = `/${props.profileImage}.jpg`;
    return (
    <div className={styles["media-element"]}>
        <div className={styles["media-title"]}>
            <div className={styles["media-profile"]}>
                <div className={styles["media-profile-picture"]}>
                    <Image src={profileString} layout="fill" objectFit="cover" quality={10} />
                </div>
                <div style={{marginLeft: '15px'}}>
                    <div className={styles["media-name"]}>
                        {props.name}
                    </div>
                    <div className={styles["media-name-info"]}>
                        {props.nameInfo}
                    </div>
                </div>
            </div>
            <FaTwitter style={{fontSize: '39px', color: '#1DA1F2', marginRight: '11px'}}/>
        </div>
        <div className={styles["media-main"]}>
            <div className={styles["media-text"]}>
                {props.mediaText}
            </div>
            <div className={styles["media-img"]}>
                <Image src={nameString} layout='fill' objectFit='cover' quality={50}/>
            </div>
        </div>
    </div>
    )
}
