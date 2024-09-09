import { useSearchParams } from "react-router-dom";
import NewNavBar from "../components/NewNavBar";
import DashContainer from "./DashContainer";

function DashBoard() {
  const [param, setParm] = useSearchParams();
  const name = param.get("name");
  console.log(name);

  return (
    <>
      <NewNavBar />
      <DashContainer name={name} />
    </>
  );
}

export default DashBoard;
