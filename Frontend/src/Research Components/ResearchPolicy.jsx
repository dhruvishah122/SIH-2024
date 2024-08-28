import styles from "./ResearchPolicy.module.css";

function ResearchPolicy() {
  return (
    <>
      <div className={`${styles.container} container-fluid`}>
        <div className={styles["title"]}>Research Policy and Governance</div>
        <div className="d-flex px-5 py-5 gap-4 mt-5">
          <div className="px-5">
            <div>
              <div className={styles["policyInfo"]}>
                <h3 className="py-3">Guidelines and Policies</h3>
              </div>
              <div className={styles["policyInfoTitle "]}>
                <h5>
                  Gujarat is committed to fostering a supportive environment for
                  startups and innovation, guided by comprehensive guidelines
                  and policies. These regulations are designed to ensure that
                  startups operate within a framework that promotes growth,
                  sustainability, and ethical practices. The state's policies
                  cover a wide range of areas, including startup recognition,
                  funding eligibility, intellectual property rights, and
                  compliance with local and national laws. By adhering to these
                  guidelines, startups in Gujarat can access various government
                  schemes, incentives, and support systems, ensuring a smooth
                  and legally compliant journey from inception to growth.
                </h5>
              </div>
              <div className={styles["btn"]}>Explore Guidelines</div>
            </div>
          </div>

          <hr></hr>

          <div className="px-5">
            <div>
              <div className={styles["policyInfo"]}>
                <h3 className="py-3">Policy Updates</h3>
              </div>
              <div className={styles["policyInfoTitle "]}>
                <h5>
                  In Gujarat, staying informed about the latest policy updates
                  is crucial for startups and businesses to navigate the
                  evolving regulatory landscape effectively. The state regularly
                  revises its policies to align with emerging trends,
                  technological advancements, and the needs of the
                  entrepreneurial ecosystem. These updates ensure that startups
                  benefit from the most current incentives, compliance
                  requirements, and support mechanisms available. By keeping
                  pace with policy changes, businesses in Gujarat can optimize
                  their operations, take advantage of new opportunities, and
                  remain competitive in a dynamic market.
                </h5>
              </div>
              <div className={styles["btn"]}>Check Updates</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResearchPolicy;
