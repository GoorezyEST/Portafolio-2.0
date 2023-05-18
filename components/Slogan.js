import React, { useEffect, useRef } from "react";
import styles from "@/styles/modules/slogan.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Slogan() {
  const [lettersRef, setLettersRef] = useArrayRef();

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const reveal = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top 75%",
        end: "bottom 75%",
        toggleActions: "play reverse none none",
      },
      color: "var(--white-main)",
      duration: 5,
      stagger: 1,
    });

    return () => {
      reveal.kill();
    };
  }, []);

  const text =
    "Desarrollo de sitios web equilibrando el estilo y la optimización";

  return (
    <div className={styles.container}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={styles.top_svg}
      >
        <path
          fillOpacity="1"
          d="M0,64L48,90.7C96,117,192,171,288,165.3C384,160,480,96,576,80C672,64,768,96,864,96C960,96,1056,64,1152,58.7C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className={styles.reveal}>
        <div ref={triggerRef}>
          {text.split("").map((letter, index) => {
            return (
              <span
                className={styles.reveal_text}
                key={index}
                ref={setLettersRef}
              >
                {letter}
              </span>
            );
          })}
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 315"
        className={styles.bot_svg}
      >
        <path
          fillOpacity="1"
          d="M0,64L48,90.7C96,117,192,171,288,165.3C384,160,480,96,576,80C672,64,768,96,864,96C960,96,1056,64,1152,58.7C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
