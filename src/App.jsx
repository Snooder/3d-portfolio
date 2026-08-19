import React, { lazy, Suspense, useRef, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { initGA, logPageView } from "./analytics";
import { EggProvider } from "./context/EggContext"; // Import EggProvider
import RecruiterBanner from "./components/RecruiterBanner";
import PhoneIntroOverlay from "./components/PhoneHeader/PhoneIntroOverlay";
import EggToast from "./components/EggToast";
import ThanksBanner from "./components/ThanksBanner";
import DeferredSection from "./components/DeferredSection";

const Experience = lazy(() => import("./components/Experience"));
const GithubShowcase = lazy(() => import("./components/GithubShowcase"));
const DesignsGallery = lazy(() => import("./components/DesignsGallery"));
const EventGallery = lazy(() => import("./components/EventGallery"));
const Contact = lazy(() => import("./components/Contact"));
const ProgressEggHunt = lazy(() => import("./components/ProgressEggHunt"));
const AboutMeModal = lazy(() => import("./components/AboutMeModal"));

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
            <section id="hero" className="relative z-40 w-full bg-[#020818]">
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
              <DeferredSection minHeight={1050}><Experience /></DeferredSection>
            </section>
            <section id="github" className="relative z-30 bg-primary">
              <DeferredSection minHeight={1100}><GithubShowcase /></DeferredSection>
            </section>
            <section id="designs" className="relative z-30 bg-primary">
              <DeferredSection minHeight={900}><DesignsGallery /></DeferredSection>
            </section>
            <ThanksBanner />
            <section id="events" className="relative z-30 bg-primary">
              <DeferredSection minHeight={850}><EventGallery /></DeferredSection>
            </section>
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
            <section id="contact" className="relative z-30 bg-primary">
              <DeferredSection minHeight={420}><Contact /></DeferredSection>
            </section>
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
            <section id="eggHunt" className="relative z-30 bg-primary">
              <DeferredSection minHeight={420}><ProgressEggHunt /></DeferredSection>
            </section>
          </main>
          {aboutOpen && (
            <Suspense fallback={null}>
              <AboutMeModal onClose={() => setAboutOpen(false)} />
            </Suspense>
          )}
          <EggToast />
        </div>
      </BrowserRouter>
    </EggProvider>
  );
};

export default App;
