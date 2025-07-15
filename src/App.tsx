import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import EngineLoader from "./components/EngineLoader";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const loadingTimer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(loadingTimer);
          // Add a small delay before hiding the loader
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15; // Random increment for realistic loading
      });
    }, 150);

    return () => clearInterval(loadingTimer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Smooth scrolling polyfill for older browsers
      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const target = document.querySelector(
            link.getAttribute("href") || ""
          );
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        });
      });
    }
  }, [isLoading]);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <EngineLoader key="loader" progress={loadingProgress} />
        ) : (
          <main key="main">
            <Navigation />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
