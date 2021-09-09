import styles from "@styles/layout/Header.module.scss"

export default function Header() {
  return (
    <header className={styles.header}>
      <img src='logo.png' alt='trillo logo' className={styles.logo} />
      <form action='#' className={styles.search}>
        <input
          type='text'
          className={styles.input}
          placeholder='Search Hotels'
        />
        <button className={styles.button}>
          <svg className={styles.icon}>
            <use xlinkHref='sprite.svg#icon-magnifying-glass' />
          </svg>
        </button>
      </form>

      <nav className={styles.userNav}>
        <div className={styles.iconBox}>
          <svg className={styles.icon2}>
            <use xlinkHref='sprite.svg#icon-bookmark' />
          </svg>
          <span className={styles.notification}>7</span>
        </div>
        <div className={styles.iconBox}>
          <svg className={styles.icon2}>
            <use xlinkHref='sprite.svg#icon-chat' />
          </svg>
          <span className={styles.notification}>13</span>
        </div>
        <div>
          <img src='kanata.jpg' alt='User Photo' className={styles.userPhoto} />
          <span>Kanata</span>
        </div>
      </nav>
    </header>
  )
}
