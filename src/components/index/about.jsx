import styles from "@/styles/index/about.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";


export default function About() {

  return (
    <div className={styles["about-section"]} id="about">
      <div
        className={`${styles["about-section__wrapper"]} ${styles["about-section__container"]}`}
      >
        <div className={styles["about-section__content-left"]}>
          <Image
            src="/about.png"
            width={2400}
            height={2400}
            alt="About Us"
            className={styles["about-section__main-image"]}
          />
        </div>
        <div className={styles["about-section__content-right"]}>
          <p className={styles["about-section__subheading"]}>ABOUT</p>
          <h2 className={styles["about-section__heading"]}><span>About </span>us</h2>
          <div className={styles["about-section__swiper"]}>
          <Swiper modules={{ Navigation }} loop={true} speed={600} slidesPerView={1} spaceBetween={20} navigation={{
            prevEl: ".slider-prev",
            nextEl: ".slider-next",
          }}>
            <SwiperSlide><p>Welcome to X365, the epitome of luxury concierge services. With unwavering dedication, we cater to a discerning clientele of wealthy individuals, business professionals, and those who seek the extraordinary. Our commitment to making the impossible possible is at the core of everything we do. Operating 365 days a year, our team of experts thrives on delivering personalized and flawless experiences, ensuring that every request is met with utmost precision. From travel arrangements to luxury goods acquisition, event planning, and beyond, we provide an unparalleled level of sophistication, exclusivity, and reliability. Our logo, symbolizing the unknown element with &apos;X&apos; and year-round availability with &apos;365,&apos; embodies our dedication to limitless possibilities. Join us on this exceptional journey and let us make your dreams a reality.</p> </SwiperSlide>
            <SwiperSlide><p>Welcome to X365, the epitome of luxury concierge services. With unwavering dedication, we cater to a discerning clientele of wealthy individuals, business professionals, and those who seek the extraordinary. Our commitment to making the impossible possible is at the core of everything we do. Operating 365 days a year, our team of experts thrives on delivering personalized and flawless experiences, ensuring that every request is met with utmost precision. From travel arrangements to luxury goods acquisition, event planning, and beyond, we provide an unparalleled level of sophistication, exclusivity, and reliability. Our logo, symbolizing the unknown element with &apos;X&apos; and year-round availability with &apos;365,&apos; embodies our dedication to limitless possibilities. Join us on this exceptional journey and let us make your dreams a reality.</p> </SwiperSlide>
            {/* <div className={styles.router}>
              <div className="slider-prev">
                <Image
                  src="/arrow-left.svg"
                  alt="Slider Arrow"
                  width={24}
                  height={24}
                  className={styles.router__prev}
                />
              </div>
              <div className="slider-next">
                <Image
                  src="/arrow-left.svg"
                  alt="Slider Arrow"
                  width={24}
                  height={24}
                  className={styles.router__next}
                />
              </div>
            </div> */}
          </Swiper>
          </div>
          
          
      
        </div>
      </div>
    </div>
  );
}
