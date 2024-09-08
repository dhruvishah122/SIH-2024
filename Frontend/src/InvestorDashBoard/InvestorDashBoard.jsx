import { useSearchParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import DashContainer from "./InvestorDashContainer";
// import { useEffect, useState } from "react";

function InvestorDashBoard() {
  const [param, setParm] = useSearchParams();
  const name = param.get("name");
  // console.log(email);

  return (
    <>
      <NavBar />
      <DashContainer name={name} />
    </>
  );
}

export default InvestorDashBoard;
