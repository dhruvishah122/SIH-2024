import styles from "./ResearchFundingOpp.module.css";
import Cards from "./FundingCards";
import "./FundingOppCards.css";

function ResearchFundingOpp() {
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["title"]}>Research Funding Opportunities</div>
        <div className={`${styles["funding-info"]} h4`}>
          Researchers in Gujarat can access a wealth of funding opportunities
          through this dedicated platform, which offers a curated database of
          grants tailored to regional needs. The streamlined application
          process, combined with essential resources and tools, ensures that
          researchers can efficiently secure and manage funding. By fostering
          innovation and advancing research, this platform plays a crucial role
          in supporting Gujarat's vibrant knowledge economy and research
          ecosystem.
        </div>
        <Cards />
      </div>
    </>
  );
}

export default ResearchFundingOpp;
