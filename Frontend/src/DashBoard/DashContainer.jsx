// import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import styles from "./DashContainer.module.css";
import SideBar from "./SideBar";
// import Profile from "./Profile";
import { Outlet } from "react-router-dom";

function DashContainer() {
  return (
    <>
      <NavBar />
      <div className={styles["container"]}>
        <div className={styles["side-container"]}>
          <SideBar />
        </div>
        <div className={styles["main-container"]}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default DashContainer;
