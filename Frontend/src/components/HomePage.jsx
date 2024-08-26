import NavBar from "./NavBar";
import StartupIntro from "./StartupIntro";
import Advertisement from "./Advertisement";
import FundingsIntro from "./FundingsIntro";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <NavBar />
      <Advertisement />
      <StartupIntro />
      <FundingsIntro />
      <Footer/>
    </>
  );
}

export default HomePage;
