import styles from "./StartupProcess.module.css";

function StartupProcess() {
  return (
    <>
      <div className={styles["title"]}>
        Startup Registration Process Overview
      </div>
      <div className={`${styles.container} container-fluid`}>
        <div className={styles["one"]}>
          <div className={`${styles.processBox} d-flex`}>
            <img className={styles["image"]} src="./1.png" alt="1" />
            <div>
              <div className={styles.subHeading}>Eligibility Check</div>
              <div className={`${styles.info} h5 pt-2`}>
                Confirm that your business meets Gujarat’s criteria for
                startups, including innovation and turnover requirements
              </div>
            </div>
          </div>
        </div>

        <div className={styles["two"]}>
          <div className={`${styles.processBox} d-flex`}>
            <img className={styles["image"]} src="./2.png" alt="1" />
            <div>
              <div className={styles.subHeading}>
                Register on Startup Gujarat Portal
              </div>
              <div className={`${styles.info} h5 pt-2`}>
                Create an account and submit your startup details on the
                official Startup Gujarat portal
              </div>
            </div>
          </div>
        </div>

        <div className={styles["three"]}>
          <div className={`${styles.processBox} d-flex`}>
            <img className={styles["image"]} src="./3.png" alt="1" />
            <div>
              <div className={styles.subHeading}>Documentation Submission</div>
              <div className={`${styles.info} h5 pt-2`}>
                Upload required documents, such as proof of business,
                identification, and innovation details, on the portal
              </div>
            </div>
          </div>
        </div>

        <div className={styles["four"]}>
          <div className={`${styles.processBox} d-flex`}>
            <img className={styles["image"]} src="./4.png" alt="1" />
            <div>
              <div className={styles.subHeading}>
                Startup Recognition Application
              </div>
              <div className={`${styles.info} h5 pt-2`}>
                Apply for official startup recognition, which may include
                evaluation by a panel for innovation and scalability
              </div>
            </div>
          </div>
        </div>

        <div className={styles["five"]}>
          <div className={`${styles.processBox} d-flex`}>
            <img className={styles["image"]} src="./5.png" alt="1" />
            <div>
              <div className={styles.subHeading}>
                Approval and Certification
              </div>
              <div className={`${styles.info} h5 pt-2`}>
                Upon approval, receive your startup recognition certificate,
                making you eligible for government schemes and benefits
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default StartupProcess;
