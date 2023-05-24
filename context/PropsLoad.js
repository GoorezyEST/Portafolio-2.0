"use client";

import { useEffect } from "react";
import { useGlobal } from "./GlobalContext";
import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";

export function PropsLoad({ children }) {
  const { isHydrated } = useGlobal();

  useEffect(() => {
    if (!isHydrated) {
      document.body.style.height = "100%";
    }
  }, [isHydrated]);

  return (
    <>
      <AnimatePresence>
        {isHydrated && (
          <motion.div
            className="loading_container"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.5,
              delay: 0,
              ease: "easeOut",
            }}
          >
            <div className="loading">
              <div className="loading__letter">C</div>
              <div className="loading__letter">A</div>
              <div className="loading__letter">R</div>
              <div className="loading__letter">G</div>
              <div className="loading__letter">A</div>
              <div className="loading__letter">N</div>
              <div className="loading__letter">D</div>
              <div className="loading__letter">O</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
