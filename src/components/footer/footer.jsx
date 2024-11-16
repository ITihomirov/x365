import { useRouter } from 'next/router';
import styles from './footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Social } from "../social-element/Social.jsx";
import { socialInfo } from "@/data/socialInfo.jsx";

export default function Footer() {
  const router = useRouter();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div>
        <div className={`${styles.footer__main} ${styles.footer__container}`}>
            <div className={styles.footer__left}>
                <Link href="/" className={styles.footer__logo} >
                    <Image src="/logo.png" width={1200} height={1200} alt="Logo" className={styles.footer__logo} />
                </Link>
                <div className={styles.footer__left_menu}>
                    <ul className={styles.header__menu}>
                    <li>
                        <Link href="/" className={styles.footer__link}>
                            Home
                        </Link>
                    </li>

                    <li>
                        <button onClick={() => scrollToSection('about')} className={`${styles.footer__link} ${router.pathname == '/' ? styles.active : ''} `}>
                        About us
                        </button>
                    </li>

                    <li>
                        <button onClick={() => scrollToSection('services')} className={`${styles.footer__link} ${router.pathname == '/' ? styles.active : ''} `}>
                            Services
                        </button>
                    </li>
                    </ul>
                    <ul className={styles.header__menu}>
                    <li>
                        <button onClick={() => scrollToSection('membership')} className={`${styles.footer__link} ${router.pathname == '/' ? styles.active : ''} `}>
                        Membership
                        </button>
                    </li>

                    <li>
                        <Link href="/" className={styles.footer__link}>
                            Blog
                        </Link>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('contact')} className={`${styles.footer__link} ${router.pathname == '/' ? styles.active : ''} `}>
                        Contact
                        </button>
                    </li>
                    </ul>
                </div>
            </div>
            <div className={styles.footer__right}>
                <h2>Follow Us</h2>
                <div className={styles.footer__social}>
                {socialInfo.map((social, index) => (
                        <Social
                            key={index}
                            alt={social.alt}
                            name={social.name}
                            url={social.url}
                            image={social.image}
                        />
                    ))}
                </div>
            </div>
        </div>
        <div className={`${styles.footer__down} ${styles.footer__container}`} >

            <div className={styles.footer__copyright}>
                <p>Copywright 2023. All right reserved.</p>
            </div>
            <div className={styles.footer__policy}>
                <ul>
                    <li>
                        <Link href="/" className={`${styles.footer__link} ${router.pathname == '/' ? styles.active : ''} `}>
                            Terms & Conditions
                        </Link>
                    </li>

                    <li>
                        <Link href="/" className={`${styles.footer__link} ${router.pathname == '/' ? styles.active : ''} `}>
                            Privacy Policy
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </footer>
  );
}
