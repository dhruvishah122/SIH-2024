import styles from "./IntroSection.module.css";

function IntroSection() {
  return (
    <>
      <div className={styles["flex-containerr"]}>
        <h1 className={styles["startup-titlee"]}>
          Accelerate Your Startup Journey
        </h1>
        <h3 className={styles["startup-titlee"]} style={{ fontSize: "28px" }}>
          "Discover Resources, connect with Mentors, and scale your Innovation"
        </h3>

        <img
          src="startupimage.jpg"
          alt="startup image"
          className="h-30 w-25 mt-3 border rounded-4 border-white "
        />
        <h4 className={`text-center  ${styles.startupInfoo}`}>
          Our platform is dedicated to fostering innovation and growth for
          startups in Gujarat. From initial idea validation to scaling your
          business, we provide essential resources, expert mentorship, and a
          supportive community to help you navigate the challenges of
          entrepreneurship and turn your vision into reality.
        </h4>
      </div>
    </>
  );
}

export default IntroSection;
