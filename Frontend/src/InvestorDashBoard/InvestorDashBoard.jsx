import { useSearchParams } from "react-router-dom";
import NavBar from "../components/NewNavBar";
import DashContainer from "./InvestorDashContainer";
import InvestorNavBar from "../NavBars/InvestorNavBar";
// import { useEffect, useState } from "react";

function InvestorDashBoard() {
  const [param, setParm] = useSearchParams();
  const name = param.get("name");
  // console.log(email);

  return (
    <>
      <InvestorNavBar />
      <DashContainer name={name} />
    </>
  );
}

export default InvestorDashBoard;
