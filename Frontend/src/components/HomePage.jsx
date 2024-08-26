import NavBar from "./NavBar";
import StartupIntro from "./StartupIntro";
import Advertisement from "./Advertisement";
import FundingsIntro from "./FundingsIntro";
import Footer from "./Footer";
import HomePageInformation from "./HomePageInformation";

function HomePage() {
  return (
    <>
      <NavBar />
      <Advertisement />
      <StartupIntro />
      <FundingsIntro />
      <HomePageInformation/>
      <Footer/>
    </>
  );
}

export default HomePage;
