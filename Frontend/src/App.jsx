import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";

import StartupHomePage from "./StartupPage/StartupHomePage";
import ResearchHomePage from "./Research Components/ResearchHomePage";
import IPRHomePage from "./IPR/IPRHomePage";
import StartupStatus from "./StartupStatus";
import InvestorPage from "./InvestorsCards/InvestorPage";
import StartupPage from "./components/StartupPage";
import PostPage from "./Post/PostPage";

import ScrollToTop from "./ScrollToTop.jsx";

import "./index.css";
import DashBoard from "./DashBoard/DashBoard.jsx";
import Profile from "./DashBoard/Profile.jsx";
import Track from "./DashBoard/Track.jsx";
import CreatePost from "./DashBoard/CreatePost.jsx";

import InvestorDashBoard from "./InvestorDashBoard/InvestorDashBoard.jsx";
import InvestorProfile from "./InvestorDashBoard/InvestorProfile.jsx";
import InvestorTrack from "./InvestorDashBoard/InvestorTrack.jsx";
import InvestorCreatePost from "./InvestorDashBoard/InvestorCreatePost.jsx";
import Form from "./DashBoard/Form.jsx";
import StartupProfile from "../viewprofile/StartupProfile.jsx";
import ProfileInvestor from "../viewprofile/ProfileInvestor.jsx";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route index element={<HomePage />}></Route>

        <Route path="/" element={<HomePage />}></Route>
        <Route path="/logout" element={<HomePage />}></Route>

        <Route path="/startup" element={<StartupHomePage />}></Route>
        <Route path="/ResearchHomePage" element={<ResearchHomePage />}></Route>
        <Route path="/iprhomepage" element={<IPRHomePage />}></Route>

        <Route path="/investors" element={<InvestorPage />}></Route>
        <Route path="/startups" element={<StartupPage />}></Route>

        <Route path="/post" element={<PostPage />}></Route>

        <Route path="/dashboard" element={<DashBoard />}>
          <Route index element={<Profile />}></Route>
          <Route path="" element={<Profile />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="track" element={<Track />}></Route>
          <Route path="createpost" element={<CreatePost />}></Route>
          <Route path="form" element={<Form />}></Route>
        </Route>
        <Route path="/investordashboard" element={<InvestorDashBoard />}>
          <Route index element={<InvestorProfile />}></Route>
          <Route path="" element={<InvestorProfile />}></Route>
          <Route path="profile" element={<InvestorProfile />}></Route>
          <Route path="track" element={<InvestorTrack />}></Route>
          <Route path="createpost" element={<InvestorCreatePost />}></Route>
         
        </Route>
        <Route path="/Startupstatus" element={<StartupStatus />}></Route>
        <Route path="/profile/:id" element={<StartupProfile />}></Route>
        <Route
          path="/investorprofile/:id"
          element={<ProfileInvestor />}
        ></Route>
        <Route path="/Startupstatus" element={<StartupStatus />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
