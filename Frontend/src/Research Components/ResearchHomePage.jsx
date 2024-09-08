import NavBar from "../components/NavBar";
import ResearchInfo from "./ResearchInfo";
import ResearchFundingOpp from "./ResearchFundingOpp";
import ResearchProcess from "./ResearchProcess";
import ResearchAnalytics from "./ResearchAnalytics";
import ResearchTraining from "./ResearchTraining";
import ResearchPolicy from "./ResearchPolicy";
import Footer from "../components/Footer";

function ResearchHomePage() {
  return (
    <>
      <NavBar />
      <ResearchInfo />
      <ResearchFundingOpp />
      <ResearchProcess />
      <ResearchAnalytics />
      <ResearchTraining />
      <ResearchPolicy />
      <Footer />
    </>
  );
}

export default ResearchHomePage;
