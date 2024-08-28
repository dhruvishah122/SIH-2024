import HomePage from "./components/HomePage";
import StartupPage from "./components/StartupPage";
import ResearchHomePage from "./Research Components/ResearchHomePage";
import "./index.css";
import IPRHomePage from "./IPR/IPRHomePage";
import InvestorPage from "./InvestorsCards/InvestorPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartupHomePage from "./StartupPage/StartupHomePage";
import PostPage from "./Post/PostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/startups" element={<StartupPage />}></Route>
        <Route path="/iprhomepage" element={<IPRHomePage />}></Route>
        <Route path="/investors" element={<InvestorPage />}></Route>
        <Route path="/post" element={<PostPage />}></Route>
        <Route path="/startup" element={<StartupHomePage />}></Route>
        <Route path="/ResearchHomePage" element={<ResearchHomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
