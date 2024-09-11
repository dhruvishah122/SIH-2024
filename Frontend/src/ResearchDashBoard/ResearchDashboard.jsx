import { useSearchParams } from "react-router-dom";
// import ResearchNavbar from "../components/NewNavBar";
import DashContainer from "./DashContainer";
import ResearchNavbar from "../NavBars/ResearchNavbar";
import ResearchNewNavBar from "../NavBars/ResearchNewNavBar";

function ResearchDashboard() {
  // const [param, setParm] = useSearchParams();
  // const name = param.get("name");
  // console.log(name);

  return (
    <>
      <ResearchNewNavBar />
      {/* <DashContainer name={name} /> */}
      <DashContainer name={name} />
    </>
  );
}

export default ResearchDashboard;
