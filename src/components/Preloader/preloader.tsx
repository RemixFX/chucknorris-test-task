import styles from './preloader.module.css';

export default function Preloader() {
  return (
      <div className={styles.spiner}>
        <div className={styles.element}></div>
        <div className={styles.element}></div>
        <div className={styles.element}></div>
        <div className={styles.element}></div>
        <div className={styles.element}></div>
        <div className={styles.element}></div>
        <div className={styles.element}></div>
        <div className={styles.element}></div>
        <div className={styles.element}></div>
        <div className={styles.element}></div>
        <div className={styles.element}></div>
        <div className={styles.element}></div>
      </div>
  )
}