import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [device, setDevice] = useState(null);
  const [isHydrated, setIsHydrated] = useState(true);

  useEffect(() => {
    const themeExists = window.localStorage.getItem("prefered-theme");

    if (themeExists !== null) {
      switch (themeExists) {
        case "dark":
          document.body.classList.remove("light-theme");
          break;
        case "light":
          document.body.classList.add("light-theme");
          break;
        default:
          document.body.classList.remove("light-theme");
      }
    }
  }, []);

  function handleThemeChange(timelineRef) {
    const timeline = timelineRef;
    timeline.reversed(!timeline.reversed());
    document.body.classList.toggle("light-theme");

    if (!document.body.classList.contains("light-theme")) {
      window.localStorage.setItem("prefered-theme", "dark");
    }
    if (document.body.classList.contains("light-theme")) {
      window.localStorage.setItem("prefered-theme", "light");
    }
  }

  useEffect(() => {
    const handleOrientationChange = (event) => {
      // Check if orientation is portrait
      if (event.matches) {
        setDevice(true);
      } else {
        setDevice(false);
      }
    };

    // Check if the window object is available (client-side rendering)
    if (typeof window !== "undefined") {
      const portrait = window.matchMedia("(orientation: portrait)");
      setDevice(portrait.matches); // Set initial value based on current orientation

      portrait.addEventListener("change", handleOrientationChange);

      return () => {
        // Clean up the event listener when the component unmounts
        portrait.removeEventListener("change", handleOrientationChange);
      };
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        device,
        isHydrated,
        setIsHydrated,
        handleThemeChange,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal debe ser usado con un settings provider");
  }
  return context;
}
