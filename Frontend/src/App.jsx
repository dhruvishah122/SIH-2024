import HomePage from "./components/HomePage";
import InvestorLogin from "./components/investorLogin";

import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/investorlogin" element={<InvestorLogin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
