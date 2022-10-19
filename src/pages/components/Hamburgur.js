import React from 'react'
import styles from '../../../styles/components/Hamburgur.module.css';

const Hamburgur = () => {
  return (
    <div className={styles.hamburgur}>
        <div className={styles.upper}></div>
        <div className={styles.mid}></div>
        <div className={styles.low}></div>
    </div>
  )
}

export default Hamburgur