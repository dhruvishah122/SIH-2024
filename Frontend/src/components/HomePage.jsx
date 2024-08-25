import NavBar from "./NavBar";
import StartupIntro from "./StartupIntro";
import Advertisement from "./Advertisement";
import FundingsIntro from "./FundingsIntro";

function HomePage() {
  return (
    <>
      <NavBar />
      <Advertisement />
      <StartupIntro />
      <FundingsIntro />
    </>
  );
}

export default HomePage;
