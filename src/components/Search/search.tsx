import styles from './search.module.css';

export default function Search() {
  return (
    <input className={styles.input} type="text" required
      placeholder='Search jokes...' autoFocus />
  )
}