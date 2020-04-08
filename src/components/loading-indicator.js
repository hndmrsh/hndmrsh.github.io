import React from "react"

import styles from "./loading-indicator.module.css"

const LoadingIndicator = ({ loading }) => {
  return (
    <div
      className={`${styles.loaderContainer} ${loading ? styles.fadeIn : styles.fadeOut}`}
    >
      <div className={styles.loader} />
    </div>
  )
}

export default LoadingIndicator
