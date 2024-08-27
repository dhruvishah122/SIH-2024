import NavBar from "./NavBar";
import StartupIntro from "./StartupIntro";
import Advertisement from "./Advertisement";
import IPRsIntro from "./IPRsIntro";
import Footer from "./Footer";
import HomePageInformation from "./Investement";
import Research from "./Research";

function HomePage() {
  return (
    <>
      <NavBar />
      <Advertisement />
      <StartupIntro />
      <Research />
      <IPRsIntro />
      <HomePageInformation />
      <Footer />
    </>
  );
}

export default HomePage;
