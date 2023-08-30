import { useAppSelector } from '../../store/hooks';
import Card from '../Card/card';
import styles from './content.module.css';

export default function Content() {

  const { jokes, loading, error } = useAppSelector(state => state.card)

  if (error) {
    return <p>Error</p>
  }

  return (
    <main className={styles.grid}>
      {
        loading &&
        <p className={styles.loading}>Loading...</p>
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