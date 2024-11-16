import styles from '@/styles/index/hero.module.scss';
import Button from '../button/button';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className={styles['hero-section']}>
       
      <div className={`${styles['hero-section__wrapper']} ${styles['hero-section__container']}`}>
        <div className={styles['hero-section__background']}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className={styles['hero-section__content']}>
            <div className={styles['hero-section__content-wrapper']}>
                <h1 className={styles['hero-section__title']}>Welcome to <span>luxury </span>concierge!</h1>
                <p className={styles['hero-section__text']}>Indulge in a world of opulence and convenience, where your every desire is catered to with utmost care. Allow us to redefine luxury and create unforgettable memories that will leave you breathless.</p>
                <Button text="Submit a request" additionalClass="hero-button" onClick={() => scrollToSection('contact')} />
            </div>
            <div>
                <Image src="/skip.png" width={1200} height={1200} alt="Skip" className={styles['hero-section__skip-image']} />
            </div>
        </div>
        <div className={styles['hero-section__image-wrapper']}>
            <Image src="/main-hero-v2.png" width={2400} height={2400} alt="Main Hero" className={styles['hero-section__main-image']} /> 
            <Image src="/hero-left.png" width={1200} height={1200} alt="Absolute Image" className={styles['hero-section__left-image']} />  
            <Image src="/hero-right.png" width={1200} height={1200} alt="Absolute Image" className={styles['hero-section__right-image']} />  
        </div>
      </div>
    </div>
  );
}
