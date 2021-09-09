import styles from "@styles/layout/Sidebar.module.scss"

export default function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <ul className={styles["side-nav"]}>
        <li className={styles.item}>
          <a href='#' className={styles.link}>
            <svg className={styles.icon}>
              <use xlinkHref='sprite.svg#icon-home' />
            </svg>
            <span>Hotel</span>
          </a>
        </li>
        <li className={styles.item}>
          <a href='#' className={styles.link}>
            <svg className={styles.icon}>
              <use xlinkHref='sprite.svg#icon-aircraft-take-off' />
            </svg>
            <span>Flight</span>
          </a>
        </li>
        <li className={styles.item}>
          <a href='#' className={styles.link}>
            <svg className={styles.icon}>
              <use xlinkHref='sprite.svg#icon-key' />
            </svg>
            <span>Car Rental</span>
          </a>
        </li>
        <li className={styles.item}>
          <a href='#' className={styles.link}>
            <svg className={styles.icon}>
              <use xlinkHref='sprite.svg#icon-map' />
            </svg>
            <span>Tours</span>
          </a>
        </li>
      </ul>

      <div className={styles.legal}>
        &copy; 2021 By Trillo. All Rights Reserved.
      </div>
    </nav>
  )
}
