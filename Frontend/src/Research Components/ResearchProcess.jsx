import styles from "./ResearchProcess.module.css";

function ResearchProcess() {
  return (
    <>
      <div className={styles["title"]}>Research Process Overview</div>
      <div className={`${styles.container} container-fluid`}>
        <div className={styles["one"]}>
          <div className={`${styles.processBox} container d-flex`}>
            <img className={styles["image"]} src="./1.png" alt="1" />
            <div>
              <div className={styles.subHeading}>
                Define the Research Problem
              </div>
              <div className={`${styles.info} h5 pt-2`}>
                Identify the research question or issue and conduct a literature
                review to understand existing knowledge and gaps.
              </div>
            </div>
          </div>
        </div>

        <div className={styles["two"]}>
          <div className={`${styles.processBox} d-flex`}>
            <img className={styles["image"]} src="./2.png" alt="1" />
            <div>
              <div className={styles.subHeading}>
                Formulate Objectives and Hypotheses
              </div>
              <div className={`${styles.info} h5 pt-2`}>
                Develop specific objectives or hypotheses that guide what the
                research aims to achieve.
              </div>
            </div>
          </div>
        </div>

        <div className={styles["three"]}>
          <div className={`${styles.processBox} d-flex`}>
            <img className={styles["image"]} src="./3.png" alt="1" />
            <div>
              <div className={styles.subHeading}>Design and Plan</div>
              <div className={`${styles.info} h5 pt-2`}>
                Choose the research methodology and design the study, including
                data collection methods and sampling strategies.
              </div>
            </div>
          </div>
        </div>

        <div className={styles["four"]}>
          <div className={`${styles.processBox} d-flex`}>
            <img className={styles["image"]} src="./4.png" alt="1" />
            <div>
              <div className={styles.subHeading}>Collect and Analyze Data</div>
              <div className={`${styles.info} h5 pt-2`}>
                Gather data using the selected methods and analyze it to draw
                conclusions and interpret results.
              </div>
            </div>
          </div>
        </div>

        <div className={styles["five"]}>
          <div className={`${styles.processBox} d-flex`}>
            <img className={styles["image"]} src="./5.png" alt="1" />
            <div>
              <div className={styles.subHeading}>
                Report and Disseminate Findings
              </div>
              <div className={`${styles.info} h5 pt-2`}>
                Document the findings, prepare reports or publications, and
                share the results with stakeholders while ensuring ethical
                compliance.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResearchProcess;
