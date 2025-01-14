import React, { useState } from "react";
import { useRouter } from 'next/router';
import styles from "@/styles/index/services.module.scss";
import { Service } from "../services-element/Service.jsx";
import { servicesInfo } from "@/data/servicesInfo.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Services() {
    const [showAll, setShowAll] = useState(false);

    const handleClick = () => {
        setShowAll(true);
    };

    const visibleServices = showAll ? servicesInfo : servicesInfo.slice(0, 3);

    return (
        <div className={styles["services-section"]} id="services">
            <div className={`${styles["services-section__wrapper"]} ${styles["services-section__container"]}`}>
                <p className={styles["services-section__subheading"]}>
                    OUR SERVICES
                </p>
                <h2 className={styles["services-section__heading"]}>
                    <span>Services</span> we provide
                </h2>
                <div className={styles["services-section__grid-wrapper"]}>
                    {visibleServices.map((service, index) => (
                        <Service
                            key={index}
                            title={service.title}
                            text={service.text}
                            image={service.image}
                        />
                    ))}
                </div>
                <div className={styles["services-section__mobile-wrapper"]}>
                    <Swiper loop={true} speed={600} slidesPerView={1} autoHeight={true} spaceBetween={20} breakpoints={{
                        768: {
                        slidesPerView: 2
                        }
                    }} >
                    {visibleServices.map((service, index) => (
                        <SwiperSlide key={service.id}>
                            <Service
                                title={service.title}
                                text={service.text}
                                image={service.image}
                            />
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </div>
          
                {!showAll && 
                    <button className={styles["services-section__button"]} onClick={handleClick}>
                        View All
                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.2071 8.70711C20.5976 8.31658 20.5976 7.68342 20.2071 7.29289L13.8431 0.928933C13.4526 0.538409 12.8195 0.538409 12.4289 0.928933C12.0384 1.31946 12.0384 1.95262 12.4289 2.34315L18.0858 8L12.4289 13.6569C12.0384 14.0474 12.0384 14.6805 12.4289 15.0711C12.8195 15.4616 13.4526 15.4616 13.8431 15.0711L20.2071 8.70711ZM0.5 9L19.5 9L19.5 7L0.5 7L0.5 9Z" fill="#100E0C"/>
                        </svg>
                    </button>
                }
            </div>
        </div>
    );
}
