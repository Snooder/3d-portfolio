import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Contact, Experience, Hero, Navbar, Portfolio} from "./components";
import EventGallery from "./components/EventGallery";
import GithubShowcase from "./components/GithubShowcase";
import ProgressEggHunt from "./components/ProgressEggHunt";
import { initGA, logPageView } from "./analytics";
import { EggProvider } from "./context/EggContext"; // Import EggProvider
import RecentProjects from "./components/RecentProjects";
import DesignsGallery from "./components/DesignsGallery";
import RecruiterBanner from "./components/RecruiterBanner";
import AboutMeModal from "./components/AboutMeModal";
import PhoneIntroOverlay from "./components/PhoneHeader/PhoneIntroOverlay";
import EggToast from "./components/EggToast";

const App = () => {
  const wrapperRef = useRef(null);
  const [active, setActive] = useState("hero"); // State to track the active navigation item
  const [aboutOpen, setAboutOpen] = useState(false);
  const [phoneIntroOpen, setPhoneIntroOpen] = useState(true);

  // useEffect to initialize Google Analytics and log the initial page view
  useEffect(() => {
    initGA(); // Initialize Google Analytics
    logPageView(); // Log the initial page view
  }, []);

  return (
    <EggProvider>
      {/* Wrap the whole app in EggProvider to provide context to child components */}
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          {phoneIntroOpen && (
            <PhoneIntroOverlay onClose={() => setPhoneIntroOpen(false)} />
          )}
          <Navbar active={active} setActive={setActive}/>
          <main className="wrapper" ref={wrapperRef}>
            <section id="hero" className="z-40">
              <Hero
                active={active}
                setActive={setActive}
                scrollContainer={wrapperRef}
                phonePaused={phoneIntroOpen}
                onPhoneOpen={() => setPhoneIntroOpen(true)}
              />
            </section>
            <RecruiterBanner onReadMore={() => setAboutOpen(true)} />
            <section id="experience" className="relative z-30 mb-8 bg-primary">
              <Experience />
            </section>
            <section id="github" className="relative z-30 mb-8 bg-primary">
              <GithubShowcase />
            </section>
            <section id="designs" className="relative z-30 mb-8 bg-primary">
              <DesignsGallery />
            </section>
            <section id="events" className="relative z-30 mb-8 bg-primary">
              <EventGallery />
            </section>
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
            <section id="contact" className="relative z-30 bg-primary">
              <Contact />
            </section>
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
            <section id="eggHunt" className="relative z-30 bg-primary">
              <ProgressEggHunt />
            </section>
          </main>
          {aboutOpen && <AboutMeModal onClose={() => setAboutOpen(false)} />}
          <EggToast />
        </div>
      </BrowserRouter>
    </EggProvider>
  );
};

export default App;
