import NavBar from "./NavBar";
import Advertisement from "./Advertisement";
import StartupIntro from "./StartupIntro";
import IPRsIntro from "./IPRsIntro";
import HomePageInformation from "./Investement";
import Research from "./Research";
import Footer from "./Footer";

// import Header from "./Header";
import NewHeader from "./NewHeader.jsx";

function HomePage() {
  return (
    <>
      <NavBar />
      <NewHeader />
      {/* <Header /> */}
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
