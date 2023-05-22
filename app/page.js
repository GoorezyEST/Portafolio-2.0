"use client";

import Slogan from "@/components/Slogan";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import SecondPage from "@/components/SecondPage";
import ProjectsTransition from "@/components/ProjectsTransition";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef, useState } from "react";
import Footer from "@/components/Footer";
import { GlobalProvider } from "@/context/GlobalContext";
import Preferences from "@/components/Preferences";
import { gsap } from "gsap";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <GlobalProvider>
      <div className="content">
        <div className="fixed-container" aria-haspopup="true">
          <Preferences />
        </div>
        <Landing />
        <Slogan />
        <SecondPage />
        <ProjectsTransition />
        <Projects />
        <Footer />
      </div>
    </GlobalProvider>
  );
}
