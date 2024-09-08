import styles from "./FeaturedStartup.module.css";
import Startups from "./Startups";
import StartupButton from "../components/StartupButton";

function FeaturedStartup() {
  return (
    <>
      <div className={styles["flex-containerr"]}>
        <h1 className={styles["featured-titlee"]}>Featured Startups</h1>
        <h4 className={styles["info"]}>
          Explore the diverse and dynamic startups featured on our platform.
          These companies represent the cutting edge of innovation across
          various industries, showcasing the creativity and entrepreneurial
          spirit of Gujarat. By highlighting their unique products, services,
          and achievements, we aim to celebrate their contributions to the
          startup ecosystem and inspire others to pursue their entrepreneurial
          dreams.
        </h4>
        <Startups />
        <StartupButton path={"/startups"}>View All Startups</StartupButton>
      </div>
    </>
  );
}

export default FeaturedStartup;
