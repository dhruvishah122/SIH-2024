import HomePage from "./components/HomePage";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />}></Route>
        {/* <Route path="http://localhost:8080/investorlogin"></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;