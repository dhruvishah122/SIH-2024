import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import FeaturedStartup from "./FeaturedStartup";
import IntroSection from "./IntroSection";
import StartupProcess from "./StartupProcess";

import Collaboration from "./Collaboration";
import StartupFooter from "../Footers/StartupFooter";
import StartupNavbar from "../NavBars/StartupNavbar";

function StartupHomePage() {
  return (
    <div>
      <StartupNavbar />
      <IntroSection />
      <FeaturedStartup />
      <StartupProcess />
      <Collaboration />
      <StartupFooter />
    </div>
  );
}

export default StartupHomePage;
