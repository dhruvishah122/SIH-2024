import styles from "./Collaboration.module.css";
import Investors from "./Investors";
import { Link } from "react-router-dom";
import StartupButton from "./StartupButton";

function Collaboration() {
  return (
    <>
      <div className={styles["flex-containerr"]}>
        <h1 className={styles["featured-titlee"]}>
          Collaborate with Investors to Accelerate Your Startup
        </h1>
        <h4 className={styles["info"]}>
          Our platform fosters meaningful collaborations between startups and
          investors, creating opportunities for growth and innovation. By
          connecting startups with the right investors, we help forge
          partnerships that go beyond funding. Collaborate with experienced
          investors who offer not just capital but also valuable insights,
          mentorship, and connections. Together, build a future where your
          startup can thrive and make a significant impact.
        </h4>
        <Investors />
        {/* <Link to="/investors" className={styles["btn--investors"]}>
          <div>Connect with Investors</div>
        </Link> */}

        <StartupButton path={"/investors"}>View All Startups</StartupButton>
      </div>
      <hr></hr>
    </>
  );
}

export default Collaboration;
