import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.name}>Muhammet Duran</h1>
      <h3 className={styles.title}>Frontend Devoloper</h3>
    </div>
  );
}

export default Home;
