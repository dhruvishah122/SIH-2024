import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import FeaturedStartup from "./FeaturedStartup";
import IntroSection from "./IntroSection";
import StartupProcess from "./StartupProcess";

import Collaboration from "./Collaboration";

function StartupHomePage() {
  return (
    <div>
      <NavBar />
      <IntroSection />
      <FeaturedStartup />
      <StartupProcess />
      <Collaboration />
      <Footer />
    </div>
  );
}

export default StartupHomePage;
