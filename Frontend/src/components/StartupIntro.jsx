import styles from "./StartupIntro.module.css";

function StartupIntro() {
  return (
    <>
      <div className={styles["image-container"]}>
        <div className={styles["startup-title"]}>Start Up</div>
      </div>
    </>
  );
}

export default StartupIntro;
