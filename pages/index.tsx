import type { NextPage } from "next"
import Header from "@layout/Header"
import styles from "@styles/pages/Home.module.scss"
import Sidebar from "@layout/Sidebar"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>
        <Sidebar />
      </div>
    </div>
  )
}

export default Home
