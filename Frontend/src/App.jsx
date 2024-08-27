import HomePage from "./components/HomePage";
import StartupPage from "./components/StartupPage";
import "./index.css";
import IPRHomePage from "./IPR/IPRHomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/startups" element={<StartupPage />}></Route>
        <Route path="/iprhomepage" element={<IPRHomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
