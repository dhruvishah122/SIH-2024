import NavBar from "./NavBar";
import Advertisement from "./Advertisement";
import StartupIntro from "./StartupIntro";
import IPRsIntro from "./IPRsIntro";
import HomePageInformation from "./Investement";
import Research from "./Research";
import Footer from "./Footer";
import Header from "./Header";

function HomePage() {
  return (
    <>
      <NavBar />
      <Header />
      {/* <Advertisement /> */}
      <StartupIntro />
      <Research />
      <IPRsIntro />
      <HomePageInformation />
      <Footer />
    </>
  );
}

export default HomePage;
