import styles from "./StartupIntro.module.css";
import Cards from "./Cards";
import StartupButton from "./StartupButton";

function StartupIntro() {
  return (
    <>
      <div className={styles["flex-container"]}>
        <div className={styles["startup-title"]}>Start Up</div>
        <div className={styles["startup-info"]}>
          <h4>
            Gujarat Startup Connect is a platform that connects startup
            communities. It offers virtual networking opportunities,
            personalized mentorship, and showcases for startups to present their
            innovations to a wider audience. By connecting startups with
            investors, mentors, and industry experts, this platform aims to
            facilitate collaboration, growth, and global exposure for Indian
            startups.
          </h4>
        </div>
        <Cards />
        <div className="mb-5">
          <StartupButton />
        </div>
      </div>
    </>
  );
}

export default StartupIntro;
