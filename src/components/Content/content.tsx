import { useAppSelector } from '../../store/hooks';
import Card from '../Card/card';
import Preloader from '../Preloader/preloader';
import styles from './content.module.css';

export default function Content() {

  // Получение состояний из стора
  const { jokes, loading, error } = useAppSelector(state => state.card)

  if (error) {
    return <p className={styles.error}>Data request error</p>
  }

  return (
    <main className={styles.grid}>
      {
        loading &&
        <Preloader />
      }
      {
        jokes.map((card) =>
          <Card
            key={card.id}
            created_at={card.created_at}
            id={card.id}
            url={card.url}
            value={card.value}
          />
        )
      }
    </main>
  )
}