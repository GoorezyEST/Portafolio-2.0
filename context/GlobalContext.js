import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [device, setDevice] = useState(null);

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
