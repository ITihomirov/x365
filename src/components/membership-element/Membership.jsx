import styles from './Membership.module.scss';
import Image from 'next/image';
import Button from '../button/button';

export function Membership({ title, text, image }) {
    return(
        <div className={styles["membership-item"]}>
            <Image src={image} alt="Star" width={75} height={75} />
            <div className={styles["membership-item__info"]}>
                <div className={styles["membership-item__info-text"]}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
                <Button text="Contact" url="/" />
            </div>
        </div>
    )
}