import { useSearchParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import DashContainer from "./DashContainer";
import { useEffect, useState } from "react";

function DashBoard() {
  const [param, setParm] = useSearchParams();
  const email = param.get("email");
  console.log(email);

  return (
    <>
      <NavBar />
      <DashContainer email={email} />
    </>
  );
}

export default DashBoard;
