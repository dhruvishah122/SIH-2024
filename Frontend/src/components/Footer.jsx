// import "./Footer.css";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import logo from "../logo.jpg";

export default function Footer() {
  return (
    <>
      <div className={`${styles.bac} text-center text-lg-start`}>
        <div className="container p-4">
          <div className="row d-flex justify-content-evenly gap-3">
            <div
              className="col-lg-3 col-md-6 mb-md-0 text-center "
              style={{ marginRight: "3rem" }}
            >
              <img src={logo} className={`m-2 ${styles.footerLogo}`}></img>

              <ul className="list-unstyled mb-0 d-flex flex-column gap-3 p-1 ">
                <li>
                  <div className=" text-decoration-none text-white">
                    Toll Free Number: 1234 2345 2345
                  </div>
                </li>
                <li>
                  <div className=" text-decoration-none text-white">
                    Working Hrs: 10:00 am - 5:30 pm
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0  text-center ">
              <ul className="list-unstyled d-flex flex-column gap-3">
                <li>
                  <Link
                    to="/startup"
                    className=" text-decoration-none text-white"
                  >
                    Startups
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ResearchHomePage"
                    className=" text-decoration-none text-white"
                  >
                    Research
                  </Link>
                </li>
                <li>
                  <Link
                    to="/iprhomepage"
                    className=" text-decoration-none text-white"
                  >
                    IPR
                  </Link>
                </li>
                <li>
                  <Link
                    to="/investors"
                    className=" text-decoration-none text-white"
                  >
                    Funding Agency
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-center">
              <ul className="list-unstyled mb-0 d-flex flex-column gap-3">
                <li>
                  <a href="#" className=" text-decoration-none text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className=" text-decoration-none text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className=" text-decoration-none text-white">
                    About us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className=" d-flex justify-content-around align-items-center flex-wrap">
          <div className="text-center p-3 d-flex align-items-center gap-1">
            <img src="./satymev.jfif" className={styles.roundd}></img>
            <div className=" d-flex flex-column">
              <h6>Ministry of commerce and industry</h6>
              <h6>Government of Gujarat</h6>
            </div>
          </div>
          <div className="text-center p-3">
            © 2024 InnoHub Gujarat.All rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
}
