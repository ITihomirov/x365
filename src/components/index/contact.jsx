import styles from "@/styles/index/contact.module.scss";
import Image from "next/image";
import { useState } from "react";
import { send } from "emailjs-com";
import { Contacts } from "../contact-element/Contacts.jsx";
import { contactInfo } from "@/data/contactInfo.jsx";

export default function Contact() {
  const [sender_name, set_sender_name] = useState("");
  const [sender_tel, set_sender_tel] = useState("");
  const [sender_email, set_sender_email] = useState("");
  const [message, setMessage] = useState("");
  const [errorTel, setErrorTel] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const handleName = (e) => {
    set_sender_name(e.target.value);
  };

  const handleTel = (e) => {
    set_sender_tel(e.target.value);
  };

  const handleEmail = (e) => {
    set_sender_email(e.target.value);
  };

  const sendMail = (e) => {
    e.preventDefault();
    setErrorTel("");
    setErrorEmail("");

    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    if (!sender_tel.match(phoneRegex)) {
      setErrorTel("Invalid phone number");
      return;
    }

    if (!sender_email.match(emailRegex)) {
      setErrorEmail("Invalid email address");
      return;
    }

    send(
      "service_7vycp6i",
      "template_k2s4vw8",
      { sender_name, sender_tel, sender_email },
      "oY5S6AfboAZQe40Kq"
    )
      .then((response) => {
        console.log(
          "Message sent successfully",
          response.status,
          response.text
        );
        setMessage("Message sent successfully");
      })
      .catch((err) => {
        console.log("Failed,", err);
        setMessage("Message sending failed");
      });

    set_sender_name("");
    set_sender_tel("");
    set_sender_email("");
  };

  return (
    <div className={styles["contact-section"]} id="contact">
      <div
        className={`${styles["contact-section__wrapper"]} ${styles["contact-section__container"]}`}
      >
        <div className={styles["contact-section__left"]}>
          <form onSubmit={sendMail} className={styles["contact-section__form"]}>
            <div className={styles["contact-section__form-input"]}>
              <p>Name</p>
              <input
                type="text"
                name="sender_name"
                value={sender_name}
                onChange={handleName}
                required
              />
            </div>
            <div className={styles["contact-section__form-input"]}>
              <p>Phone</p>
              <input
                type="tel"
                name="sender_tel"
                value={sender_tel}
                onChange={handleTel}
                required
              />
              {errorTel && (
                <p className={styles["error-message"]}>{errorTel}</p>
              )}
            </div>
            <div className={styles["contact-section__form-input"]}>
              <p>Email</p>
              <input
                type="email"
                name="sender_email"
                value={sender_email}
                onChange={handleEmail}
                required
              />
              {errorEmail && (
                <p className={styles["error-message"]}>{errorEmail}</p>
              )}
            </div>
            <div className={styles["contact-section__message"]}>
              {message && <p>{message}</p>}
            </div>
            <button className={styles["contact-section__submit"]} type="submit">
              <h4>Send</h4>
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.7071 8.70711C20.0976 8.31658 20.0976 7.68342 19.7071 7.29289L13.3431 0.928933C12.9526 0.538409 12.3195 0.538409 11.9289 0.928933C11.5384 1.31946 11.5384 1.95262 11.9289 2.34315L17.5858 8L11.9289 13.6569C11.5384 14.0474 11.5384 14.6805 11.9289 15.0711C12.3195 15.4616 12.9526 15.4616 13.3431 15.0711L19.7071 8.70711ZM-8.74228e-08 9L19 9L19 7L8.74228e-08 7L-8.74228e-08 9Z"
                  fill="#111010"
                />
              </svg>
            </button>
          </form>
        </div>
        <div className={styles["contact-section__right"]}>
          <Image
            src="/shape.svg"
            width={500}
            height={500}
            alt="Rating"
            className={styles["contact-section__shape-image"]}
          />
          <p className={styles["contact-section__subheading"]}>CONTACT US</p>
          <h2 className={styles["contact-section__heading"]}>
            <Image
              src="/main-shape.svg"
              width={500}
              height={500}
              alt="Client"
              className={styles["contact-section__main-shape-image"]}
            />
            <span> let’s work with us</span>
          </h2>
          <p className={styles["contact-section__text"]}>
            Get in touch with us to experience the finest concierge services
            tailored to your needs. Our dedicated team of professionals is ready
            to assist you in creating unforgettable moments and handling your
            every request with utmost care and attention to detail.
          </p>
        </div>
      </div>
      <div
        className={`${styles["contact-section__contact-info"]} ${styles["contact-section__container"]}`}
      >
        {contactInfo.map((contact) => (
          <Contacts
            key={contact.id}
            title={contact.title}
            text={contact.text}
            url={contact.url}
          />
        ))}
      </div>
    </div>
  );
}
