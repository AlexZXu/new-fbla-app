import React from 'react'
import styles from '../styles/CommunityStyles.module.css';
import MediaElement from './MediaElement';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import Image from 'next/image';

export default function CommunityElement(props) {
  const [width, setWidth] = React.useState(100);
  const [transition, setTransition] = React.useState("width 3s ease-in-out, height 3s ease-in-out");
  
  React.useEffect(() => {
    setWidth(prevWidth => prevWidth + 2);
    window.addEventListener('scroll', calcEnlarge);
  }, []);

  return (
    <div className={styles["community-container"]}>
        <div style={{marginBottom: '14px', textAlign: 'center'}}>
            <h2 className={styles["community-title"]}>Our Community: Somewhereland</h2>
        </div>
        <div className={styles["main-container"]}>
          <MediaElement 
            name="Sharkalex" 
            nameInfo="@Epic_Alex • Oct. 22"
            mediaText="Went by . today, got myself a drink and did some work. it was great!"
            imageName="TwitPic1"
            profileImage="ProfilePic1"
          />
          <MediaElement 
            name="Taylor Tourist" 
            nameInfo="@Taytay20 • Oct. 20"
            mediaText="Was driving through Somewhereland and stumbled upon a gem: ()"
            imageName="TwitPic2"
            profileImage="ProfilePic2"
          />
          <MediaElement 
            name="ShopFinder" 
            nameInfo="@cheapshops • Nov. 1"
            mediaText=". has been rated the best smoothie place in all of Somewhereland!"
            imageName="CarouselImage1"
            profileImage="ProfilePic3"
          />
          <MediaElement 
            name="." 
            nameInfo="@. • Nov. 4"
            mediaText="New Event Going on Today, its a get work done day!"
            imageName="TwitPic4"
            profileImage="HeroImage"
          />
          <MediaElement 
            name="." 
            nameInfo="@. • Nov. 4"
            mediaText="If you wanna get work done and sip on a smoothie, come to .!"
            imageName="TwitPic3"
            profileImage="HeroImage"
          />
           <MediaElement 
            name="Sharkalex" 
            nameInfo="@Epic_Alex • Oct. 22"
            mediaText="Went by . today, got myself a drink and did some work. it was great!"
            imageName="TwitPic1"
            profileImage="ProfilePic1"
          />
          <MediaElement 
            name="Taylor Tourist" 
            nameInfo="@Taytay20 • Oct. 20"
            mediaText="Was driving through Somewhereland and stumbled upon a gem: ()"
            imageName="TwitPic2"
            profileImage="ProfilePic2"
          />
          <MediaElement 
            name="ShopFinder" 
            nameInfo="@cheapshops • Nov. 1"
            mediaText=". has been rated the best smoothie place in all of Somewhereland!"
            imageName="CarouselImage1"
            profileImage="ProfilePic3"
          />
          <MediaElement 
            name="SmoothSe" 
            nameInfo="@SmoothSe • Nov. 4"
            mediaText="If you wanna get work done and sip on a smoothie, come to .!"
            imageName="TwitPic3"
            profileImage="HeroImage"
          />
          <MediaElement 
            name="SmoothSe" 
            nameInfo="@SmoothSe • Nov. 4"
            mediaText="New Event Going on Today, its a get work done day!"
            imageName="TwitPic4"
            profileImage="HeroImage"
          />
        </div>
        <div className={styles["community-contacts-container"]}>
          <div style={{fontFamily: 'Inter', fontWeight: '500', fontSize: '30px', marginTop: '-25px', marginBottom: '5px', color: '#543493'}}>
            Our Socials: 
          </div>
          <div className={styles["community-contacts"]}>
            <div className={styles["community-contact"]}>
              <FaTwitter className={styles["community-icon"]} style={{color: '#1DA1F2'}}/>
              <div>@smoothse</div>
            </div>
            <div className={styles["community-contact"]}>
              <FaInstagram className={styles["community-icon"]} style={{color: '#E1306C'}}/>
              <div>@somesmoothie</div>
            </div>
            <div className={styles["community-contact"]}>
              <FaFacebook className={styles["community-icon"]} style={{color: '#4267B2'}}/>
              <div>@somesmooth</div>
            </div>
          </div>
          
        </div>
        
        <div className={styles["community-button-container"]}>
          <div className={styles["community-button-image"]} style={{width: `${width}%`, height: `${width}%`, transition: transition}}>
            <Image src="/SignUpBg.jpg" layout='fill' objectFit='cover' />
          </div>
          <button className={styles["community-button"]} onClick={() => {props.setFormOpen()}}>Sign Up for Our Newsletter!</button>
        </div>
    </div>
  )
  
  function calcEnlarge () {
    setTransition("width 0.6s ease-out, height 0.6s ease-out");
    let scrollTop = window.scrollY;
    let height = Math.max(105, 105 + (scrollTop - 0.8 * window.innerHeight)/80)
    setWidth(height);
  }
}
