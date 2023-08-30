import { useEffect, useState } from 'react';
import styles from './search.module.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { findJokes } from '../../store/reducers/actionCreators';

export default function Search() {

  const dispatch = useAppDispatch()
  const [value, setValue] = useState<string>('')
  const { jokes, loading } = useAppSelector(state => state.card)

  useEffect(() => {
    if (value.length > 3) {
      dispatch(findJokes(value))
    }
  }, [dispatch, value])


  return (
    <div className={styles.search}>
      <input className={styles.input} type="text" required placeholder='Search jokes...'
        autoFocus value={value} onChange={(e) => setValue(e.target.value)} />
      {
        jokes.length > 0 &&
        <p className={styles.note}>Found jokes: {jokes.length}</p>
      }
      {
        (value.length > 1 && value.length < 4 && jokes.length === 0) &&
        <p className={styles.note}>Enter more than three letters</p>
      }
      {
        (value.length > 3 && jokes.length === 0 && loading === false) &&
        <p className={styles.note}>Nothing found</p>
      }
    </div>


  )
}