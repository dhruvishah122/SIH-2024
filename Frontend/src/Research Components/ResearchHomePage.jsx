import NavBar from "../components/NavBar";
import ResearchInfo from "./ResearchInfo";
import ResearchFundingOpp from "./ResearchFundingOpp";
import ResearchProcess from "./ResearchProcess";
import ResearchAnalytics from "./ResearchAnalytics";
import ResearchTraining from "./ResearchTraining";
import ResearchPolicy from "./ResearchPolicy";
import Footer from "../components/Footer";
import ResearchNavbar from "../NavBars/ResearchNavbar";
import ResearchFooter from "../Footers/ResearchFooter";

function ResearchHomePage() {
  return (
    <>
      <ResearchNavbar />
      <ResearchInfo />
      <ResearchFundingOpp />
      <ResearchProcess />
      <ResearchAnalytics />
      <ResearchTraining />
      <ResearchPolicy />
      <ResearchFooter />
    </>
  );
}

export default ResearchHomePage;
