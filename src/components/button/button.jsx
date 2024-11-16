import { useRouter } from 'next/router';
import styles from './button.module.scss';


export default function Button({ text, additionalClass }) {
  const router = useRouter();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <a onClick={() => scrollToSection('contact')} target="_blank" rel="noreferrer"  className={`${styles.button} ${additionalClass}`}>
      <h4>{text}</h4>
      <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.2071 8.70711C20.5976 8.31658 20.5976 7.68342 20.2071 7.29289L13.8431 0.928933C13.4526 0.538409 12.8195 0.538409 12.4289 0.928933C12.0384 1.31946 12.0384 1.95262 12.4289 2.34315L18.0858 8L12.4289 13.6569C12.0384 14.0474 12.0384 14.6805 12.4289 15.0711C12.8195 15.4616 13.4526 15.4616 13.8431 15.0711L20.2071 8.70711ZM0.5 9L19.5 9L19.5 7L0.5 7L0.5 9Z" fill="white"/>
      </svg>
    </a>
  )
}