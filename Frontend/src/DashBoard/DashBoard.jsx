import { useSearchParams } from "react-router-dom";
import NewNavBar from "../components/NewNavBar";
import DashContainer from "./DashContainer";
import StartupNewNavbar from "../NavBars/StartupNewNavbar";

function DashBoard() {
  const [param, setParm] = useSearchParams();
  const name = param.get("name");
  console.log(name);

  return (
    <>
      <StartupNewNavbar />
      <DashContainer name={name} />
    </>
  );
}

export default DashBoard;
