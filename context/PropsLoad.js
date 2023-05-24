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
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.25,
              delay: 0,
              ease: "easeOut",
            }}
          >
            <div className="spinner_container">
              <span className="spinner"></span>
            </div>
            <span className="loading_text">Cargando</span>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
