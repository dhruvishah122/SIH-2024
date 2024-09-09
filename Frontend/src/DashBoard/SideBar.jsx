import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.css";
import { useState } from "react";

function SideBar({ name }) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className={styles["container"]}>
      <NavLink to={`profile?name=${name}`} className={styles.links}>
        <div
          className={`${styles.menuItems} ${
            activeTab === 1 ? styles.active : ""
          }`}
          onClick={() => setActiveTab(1)}
        >
          Profile
        </div>
      </NavLink>
      <NavLink to={`track?name=${name}`} className={styles.links}>
        <div
          className={`${styles.menuItems} ${
            activeTab === 2 ? styles.active : ""
          }`}
          onClick={() => setActiveTab(2)}
        >
          Track Status
        </div>
      </NavLink>
      <NavLink to={`createpost?name=${name}`} className={styles.links}>
        <div
          className={`${styles.menuItems} ${
            activeTab === 3 ? styles.active : ""
          }`}
          onClick={() => setActiveTab(3)}
        >
          Create Post
        </div>
      </NavLink>
    </div>
  );
}

export default SideBar;
