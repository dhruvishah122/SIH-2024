import styles from "./StartupButton.module.css";
import { Link } from "react-router-dom";

function StartupButton({ children, path }) {
  return (
    <Link to={path} className={styles.button}>
      <div>{children}</div>
    </Link>
  );
}

export default StartupButton;
