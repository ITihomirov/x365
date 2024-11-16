import styles from './Contacts.module.scss';

export function Contacts({ title, text, url }) {
    return (
      <div className={styles['contact-item']}>
        <p>
          {title}
        </p>
        {url ? (
          <a href={url}>{text}</a>
        ) : (
          <span>{text}</span>
        )}
      </div>
    );
  }
  

