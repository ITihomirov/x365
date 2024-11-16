import styles from './Service.module.scss';
import Image from 'next/image';
import Button from '../button/button';

export function Service({ title, text, image }) {
    return(
        <div className={styles["service-item"]}>
            <Image src={image} alt="Service Image" width={1200} height={1200} />
            <div className={styles["service-item__info"]}>
                <div className={styles["service-item__info-text"]}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
                <Button text="Contact Us" />
            </div>
        </div>
    )
}