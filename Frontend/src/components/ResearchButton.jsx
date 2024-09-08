import styles from "./ResearchButton.module.css";
import { Link } from "react-router-dom";

function ResearchButton() {
  return (
    <Link to="/ResearchHomePage" className={styles.button}>
      <div>Know More About Research</div>
    </Link>
  );
}

export default ResearchButton;
