import styles from "./FundingsIntro.module.css";
import Fundings from "./Fundings";

function StartupIntro() {
  return (
    <>
      <div className={styles["flex-container"]}>
        <div className={styles["fundings-title"]}>Fundings</div>
        <Fundings />
      </div>
    </>
  );
}

export default StartupIntro;
