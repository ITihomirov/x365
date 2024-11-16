import styles from "@/styles/index/reviews.module.scss";
import Image from 'next/image';
import { Review } from "../review-element/Review.jsx";
import { reviewsInfo } from "@/data/reviewsInfo.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Reviews() {
    return (
        <div className={styles["reviews-section"]}>
            <div className={`${styles["reviews-section__wrapper"]} ${styles["reviews-section__container"]}`}>
                <div className={styles["reviews-section__left"]}>
                    <p className={styles["reviews-section__subheading"]}>
                        Reviews
                    </p>
                    <h2 className={styles["reviews-section__heading"]}>
                        <Image src="/stars.png"  width={400} height={400} alt="Stars" className={styles['reviews-section__title-image']}/>
                    <span>what our clients say</span> 
                    </h2>
                    <div className={styles["reviews-section__slider-wrapper"]}>
                        <Swiper loop={true} speed={600} slidesPerView={1} spaceBetween={20} >
                        {reviewsInfo.map((review, index) => (
                            <SwiperSlide key={index}>
                                <Review
                                    id={review.id}
                                    image={review.image}
                                    text={review.text}
                                    name={review.name}
                                    date={review.date}
                                />
                            </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className={styles["reviews-section__right"]}>
                    <Image src="/woman.png"  width={1200} height={1200} alt="Client" className={styles['reviews-section__woman-image']}/>
                    <Image src="/rating.png"  width={1200} height={1200} alt="Rating" className={styles['reviews-section__rating-image']}/>
                </div>
            </div>
            <Image src="/slider-bg.png" width={1200} height={1200} alt="Background" className={styles['reviews-section__slider-bg-image']}/>
        </div>
    );
}
