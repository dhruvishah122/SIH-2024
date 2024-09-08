import { useSearchParams } from "react-router-dom";
import NewNavBar from "../components/NewNavBar";
import DashContainer from "./DashContainer";

function DashBoard() {
  const [param, setParm] = useSearchParams();
  const email = param.get("email");
  console.log(email);

  return (
    <>
      <NewNavBar />
      <DashContainer email={email} />
    </>
  );
}

export default DashBoard;
