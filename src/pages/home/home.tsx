import "./home.css";
import HeroSectionIndexPage from "@/components/hero-section-index-page";
import PracticeArea from "@/components/practice-area";
import Achievement from "@/components/achivement";
import HappyClient from "@/components/happy-client";
import Expertise from "@/components/expertise";

export default function Home() {
  return (
    <>
      {/* Section: mobile-nav */}
      {/* <MobileNavBar /> */}

      {/* Section:nav-bar */}
      {/* <NavBar /> */}

      {/* section:hero */}
      <HeroSectionIndexPage />

      {/* end-section:hero */}

      {/* section:Practice Areas */}
      <PracticeArea />
      {/* end-section:Practice Areas */}

      {/* section: achivement*/}
      <Achievement />

      {/* section: Happy-client*/}
      <HappyClient />

      {/* section: More Expertise*/}
      <Expertise />
    </>
  );
}
