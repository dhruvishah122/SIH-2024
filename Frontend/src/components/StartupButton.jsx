import styles from "./StartupButton.module.css";
import { Link } from "react-router-dom";

function StartupButton({ children }) {
  return (
    <Link to="/startups" className={styles.button}>
      <div>{children}</div>
    </Link>
  );
}

export default StartupButton;
