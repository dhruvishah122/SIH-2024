import styles from "./ResearchAnalytics.module.css";

function ResearchAnalytics() {
  return (
    <>
      <div className={`${styles["container"]} container-fluid`}>
        <div className={styles["title"]}>Research Analytics and Insights</div>
        <div className={`${styles[""]} d-flex`}>
          <div className={`${styles["para"]} h4 `}>
            In Gujarat, research analytics plays a crucial role in advancing the
            state's scientific and academic endeavors. By leveraging
            sophisticated data analytics tools, researchers and institutions can
            gain valuable insights into research trends, funding efficiency, and
            collaboration outcomes. The state's commitment to data-driven
            decision-making ensures that research initiatives are effectively
            monitored and evaluated, leading to more informed strategies and
            optimized resource allocation. Through robust research analytics,
            Gujarat aims to enhance the impact and relevance of its research
            activities, driving innovation and supporting evidence-based policy
            development.
          </div>
          <div className={styles["image"]}>
            <img src="./Research-Analysis.jpg" alt="Research-Analytics" />
          </div>
        </div>
        <div className={styles["research-button"]}>See Insights</div>
      </div>
    </>
  );
}

export default ResearchAnalytics;
