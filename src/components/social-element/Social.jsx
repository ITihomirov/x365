import styles from './Social.module.scss';
import Image from 'next/image';

export function Social({ url, name, image, alt }) {
    return(
        <div className={styles["social-item"]}>
            <Image src={image} alt="Service Image" width={400} height={400} />
            <a href={url} alt={alt} className={styles["social-item__info"]}>{name}</a>
        </div>
    )
}