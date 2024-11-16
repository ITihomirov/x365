import styles from './Review.module.scss';
import Image from 'next/image';


export function Review({ name, text, image, date }) {
    return(
        <div className={styles["reviews-item"]}>
            <span className={styles["reviews-item__quote"]}>“</span>
                <p className={styles["reviews-item__info-text"]}>{text}</p>
                <div className={styles["reviews-item__info-item"]}>
                    <Image src={image} alt="Review Image" width={500} height={500} />
                    <div className={styles["reviews-item__info-item-left"]}>
                        <h2>{name}</h2>
                        <p>{date}</p>
                    </div>
                </div>
        </div>
    )
}