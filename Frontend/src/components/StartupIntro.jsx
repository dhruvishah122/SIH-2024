import styles from "./StartupIntro.module.css";
import Cards from "./Cards";
import StartupButton from "./StartupButton";

function StartupIntro() {
  return (
    <>
      <div className={styles["flex-container"]}>
        <div className={styles["startup-title"]}>Start Up</div>
        <Cards />
        <StartupButton />
      </div>
    </>
  );
}

export default StartupIntro;
