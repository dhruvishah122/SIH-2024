import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.css";
function SideBar() {
  return (
    <div className={styles["container"]}>
      <NavLink to="profile">
        <div className={styles.menuItems}>Profile</div>
      </NavLink>
      <NavLink to="track">
        <div className={styles.menuItems}>Track Status</div>
      </NavLink>
      <NavLink to="createpost">
        <div className={styles.menuItems}>Create Post</div>
      </NavLink>
    </div>
  );
}

export default SideBar;
