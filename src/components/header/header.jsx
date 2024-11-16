import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./header.module.scss";
import Image from "next/image";
import Button from "../button/button";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    document.documentElement.style.overflow = "hidden";
    setMenuOpen(true);
  };

  const closeMenu = () => {
    document.documentElement.style.overflow = "auto";
    setMenuOpen(false);
  };

  const router = useRouter();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`${styles.header} ${styles.header__container}`}>
      <div className={styles.header__desktop}>
        <div className={styles.header__wrapper}>
          <Link href="/">
            <Image
              src="/logo.png"
              width={1200}
              height={1200}
              alt="Logo"
              className={styles.header__logo}
            />
          </Link>
          <div className={styles.burgerMenuIcon}>
            <Image
              src="/menu.png"
              alt="Open Menu"
              width={500}
              height={500}
              className={styles.header__icon}
              onClick={openMenu}
              style={{ display: isMenuOpen ? "none" : "block" }}
            />
            <Image
              src="/close.png"
              alt="Close Menu"
              width={500}
              height={500}
              className={styles.header__icon_close}
              onClick={closeMenu}
              style={{ display: isMenuOpen ? "block" : "none" }}
            />
          </div>
        </div>
        <nav className={styles.menu}>
          <ul className={styles.header__menu}>
            <li>
              <Link
                href="/"
                className={router.pathname == "/" ? styles.active : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <button onClick={() => scrollToSection("about")}>About us</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("services")}>
                Services
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("membership")}>
                Membership
              </button>
            </li>
            <li>
              <Link
                href="/skills"
                className={router.pathname == "/skills" ? styles.active : ""}
              >
                Blog
              </Link>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")}>
                Contact
              </button>
            </li>
          </ul>
        </nav>
        <nav
          className={`${styles.burgerMenu} ${isMenuOpen ? styles.open : ""}`}
        >
          <div className={styles["header__background"]}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className={styles.header__menu}>
            <li>
              <Link
                href="/"
                className={router.pathname == "/" ? styles.active : ""}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection("about");
                  closeMenu();
                }}
              >
                About us
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection("services");
                  closeMenu();
                }}
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection("membership");
                  closeMenu();
                }}
              >
                Membership
              </button>
            </li>
            <li>
              <Link
                href="/skills"
                className={router.pathname == "/skills" ? styles.active : ""}
                onClick={closeMenu}
              >
                Blog
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection("contact");
                  closeMenu();
                }}
              >
                Contact
              </button>
            </li>
          </ul>
          <a
            onClick={() => {
              scrollToSection("contact");
              closeMenu();
            }}
            target="_blank"
            rel="noreferrer"
            className={`${styles.button} ${styles.mobileButton}`}
          >
            <h4>Join</h4>
            <svg
              width="21"
              height="16"
              viewBox="0 0 21 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.2071 8.70711C20.5976 8.31658 20.5976 7.68342 20.2071 7.29289L13.8431 0.928933C13.4526 0.538409 12.8195 0.538409 12.4289 0.928933C12.0384 1.31946 12.0384 1.95262 12.4289 2.34315L18.0858 8L12.4289 13.6569C12.0384 14.0474 12.0384 14.6805 12.4289 15.0711C12.8195 15.4616 13.4526 15.4616 13.8431 15.0711L20.2071 8.70711ZM0.5 9L19.5 9L19.5 7L0.5 7L0.5 9Z"
                fill="white"
              />
            </svg>
          </a>
        </nav>
      </div>
      <Button text="Join" additionalClass={styles.desktopButton} />
    </header>
  );
}
