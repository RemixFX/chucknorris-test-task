import Card from '../Card/card';
import styles from './content.module.css';

export default function Content() {
  return (
    <main className={styles.grid}>
      <Card />
    </main>
  )
}