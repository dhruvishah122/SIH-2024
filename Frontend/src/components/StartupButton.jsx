import styles from "./StartupButton.module.css";
import { Link } from "react-router-dom";

function StartupButton() {
  return (
    <Link to="/registeredstartups" className={styles.button}>
      <div>Know More About Startups</div>
    </Link>
  );
}

export default StartupButton;
