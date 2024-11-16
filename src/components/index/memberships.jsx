import styles from "@/styles/index/memberships.module.scss";
import Image from 'next/image';
import { Membership } from "../membership-element/Membership.jsx";
import { membershipInfo } from "@/data/membershipInfo.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Memberships() {
    return (
        <div className={styles["membership-section"]}  id="membership">
            <div className={`${styles["membership-section__wrapper"]} ${styles["membership-section__container"]}`}>
                <p className={styles["membership-section__subheading"]}>
                    membership
                </p>
                <h2 className={styles["membership-section__heading"]}>
                    <Image src="/union.png"  width={400} height={400} alt="Union" className={styles['membership-section__title-image']}/>
                   <span>Membership</span> 
                </h2>
                <div className={styles["membership-section__desktop-wrapper"]}>
                    {membershipInfo.map((membership) => (
                        <Membership
                            key={membership.id}
                            title={membership.title}
                            text={membership.text}
                            image={membership.image}
                        />
                    ))}
                </div>
                <div className={styles["membership-section__mobile-wrapper"]}>
                    <Swiper speed={600} slidesPerView={1}  spaceBetween={20} breakpoints={{
                        768: {
                        slidesPerView: 2
                        }
                    }}>
                    {membershipInfo.map((membership) => (
                        <SwiperSlide key={membership.id}>
                            <Membership
                                title={membership.title}
                                text={membership.text}
                                image={membership.image}
                            />
                        </SwiperSlide>
                        ))}
                    
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
