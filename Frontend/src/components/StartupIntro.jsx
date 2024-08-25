import styles from "./StartupIntro.module.css";
import Cards from "./Cards";

function StartupIntro() {
  return (
    <>
      <div className={styles["flex-container"]}>
        <div className={styles["startup-title"]}>Start Up</div>
        <Cards />
      </div>
    </>
  );
}

export default StartupIntro;
