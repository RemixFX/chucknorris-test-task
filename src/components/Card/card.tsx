import { Joke } from '../../store/reducers/cardSlice';
import styles from './card.module.css';

export default function Card({ created_at, id, url, value }: Joke) {

  // Форматирование даты
  const splitDate = created_at.replace(/-/g, '.').split(' ', 1).join()
  const reversedData = splitDate.split('.').reverse().join('.')

  return (
    <article className={styles.card}>
      <a className={styles.link} href={url} target='_blank'>
        <p className={styles.text}>{value}</p>
        <div className={styles.footer}>
          <span className={styles.id}>{id}</span>
          <span className={styles.date}>{reversedData}</span>
        </div>
      </a>
    </article>
  )
}