import styles from "./ResearchTraining.module.css";

function ResearchTraining() {
  return (
    <>
      <div className={`${styles["container"]} container-fluid`}>
        <div className={styles["title"]}>
          Professional Development and Training
        </div>
        <div
          className={`${styles["bgcolor"]} d-flex flex-column px-5 py-5 gap-4 mt-5`}
        >
          <div className=" d-flex flex-wrap justify-content-between px-5">
            <div>
              <div className={styles["trainingInfo"]}>
                <h3 className="py-3">Workshops and Seminars</h3>
              </div>
              <div className={styles["trainingInfoTitle "]}>
                <h5>
                  Gujarat is a thriving hub for entrepreneurship, and the state
                  actively promotes innovation through a variety of workshops
                  and seminars. These events are designed to equip startups,
                  researchers, and innovators with the latest knowledge and
                  skills in areas such as business strategy, technology trends,
                  funding opportunities, and intellectual property rights. By
                  bringing together industry experts, academics, and
                  entrepreneurs, these workshops and seminars foster
                  collaboration and provide valuable insights into the
                  challenges and opportunities of the dynamic startup ecosystem
                  in Gujarat. Participants gain practical guidance and
                  networking opportunities, empowering them to drive their
                  ventures forward with confidence.
                </h5>
              </div>
              <div className={styles["btn"]}>Explore More</div>
            </div>
          </div>

          <hr></hr>

          <div className=" d-flex flex-wrap flex-row justify-content-between px-5">
            <div>
              <div className={styles["trainingInfo"]}>
                <h3 className="py-3">Certification Programs</h3>
              </div>
              <div className={styles["trainingInfoTitle "]}>
                <h5>
                  Gujarat offers a range of certification programs aimed at
                  enhancing the skills and credentials of entrepreneurs,
                  professionals, and researchers. These programs are tailored to
                  meet the specific needs of the state's dynamic economic
                  landscape, covering areas such as business management,
                  innovation, technology, and regulatory compliance. By
                  partnering with leading educational institutions and industry
                  experts, Gujarat ensures that participants receive
                  high-quality, industry-relevant training. These certifications
                  not only bolster individual expertise but also contribute to
                  the overall growth and competitiveness of Gujarat's business
                  and research communities, positioning the state as a leader in
                  fostering skilled and knowledgeable talent.
                </h5>
              </div>
              <div className={styles["btn"]}>Explore More</div>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
    </>
  );
}

export default ResearchTraining;
