// import { Outlet } from "react-router-dom";
// import NavBar from "../components/NavBar";
import styles from "./InvestorDashContainer.module.css";
import SideBar from "./InvestorSideBar";
// import Profile from "./Profile";
import { Outlet } from "react-router-dom";

function InvestorDashContainer({ name }) {
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["side-container"]}>
          <SideBar name={name} />
        </div>
        <div className={styles["main-container"]}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default InvestorDashContainer;
