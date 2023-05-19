import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import styles from "@/styles/modules/projects.module.css";
import Link from "next/link";
import Image from "next/image";
import { data } from "@/data/projects";

export default function Projects() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const projectsRef = useRef([]);
  projectsRef.current = [];

  const addToRefs = (el) => {
    if (el && !projectsRef.current.includes(el)) {
      projectsRef.current.push(el);
    }
  };

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

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `-${projectsRef.current.length - 1}00vw`,
        ease: "none",
        duration: projectsRef.current.length,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "3500 top",
          scrub: 0.75,
          pin: true,
          snap: {
            snapTo: 1 / (projectsRef.current.length - 1),
            duration: 0.25,
            ease: "sine",
            delay: 0.35,
            directional: false,
          },
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div>
      {!device && (
        <section className={styles.scroll_section_outer}>
          <div ref={triggerRef}>
            <div ref={sectionRef} className={styles.scroll_section_inner}>
              {data.map((item, index) => {
                return (
                  <div
                    className={styles.scroll_section}
                    key={index}
                    ref={addToRefs}
                  >
                    <motion.div
                      className={styles.image}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={false}
                      transition={{
                        duration: 0.5,
                        delay: 0.25,
                      }}
                    >
                      <div className={styles.img_loading}>
                        <span className={styles.loader}></span>
                      </div>
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="400px"
                      />
                    </motion.div>
                    <motion.div
                      className={styles.accent}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={false}
                      transition={{
                        duration: 0.5,
                        delay: 0.25,
                      }}
                    ></motion.div>
                    <motion.div
                      className={styles.dots}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={false}
                      transition={{
                        duration: 0.5,
                        delay: 0.25,
                      }}
                    ></motion.div>
                    <motion.div
                      className={styles.number}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={false}
                      transition={{
                        duration: 0.5,
                        delay: 0.25,
                      }}
                    >
                      <p>0{index + 1}</p>
                    </motion.div>
                    <motion.div
                      className={styles.title}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={false}
                      transition={{
                        duration: 0.5,
                        delay: 0.25,
                      }}
                    >
                      <p>{item.text}</p>
                      <Link
                        className={styles.button}
                        href={item.link}
                        target="_blank"
                        noopener="true"
                        noreferrer="true"
                      >
                        Visitar
                      </Link>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
      {device && (
        <section>
          {data.map((item, index) => {
            return (
              <div className={styles.phone_section} key={index}>
                <motion.div
                  className={styles.phone_number}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={false}
                  transition={{
                    duration: 0.5,
                    delay: 0.25,
                  }}
                >
                  <p>0{index + 1}</p>
                </motion.div>
                <motion.div
                  className={styles.phone_dots}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={false}
                  transition={{
                    duration: 0.5,
                    delay: 0.25,
                  }}
                ></motion.div>
                <motion.div
                  className={styles.phone_accent}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={false}
                  transition={{
                    duration: 0.5,
                    delay: 0.25,
                  }}
                ></motion.div>
                <motion.div
                  className={styles.phone_image}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={false}
                  transition={{
                    duration: 0.5,
                    delay: 0.25,
                  }}
                >
                  <div className={styles.img_loading}>
                    <span className={styles.loader}></span>
                  </div>
                  <Image src={item.image} alt={item.alt} fill sizes="80vw" />
                </motion.div>
                <motion.div
                  className={styles.phone_title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={false}
                  transition={{
                    duration: 0.5,
                    delay: 0.25,
                  }}
                >
                  <p>{item.text}</p>
                  <Link
                    className={styles.phone_button}
                    href={item.link}
                    target="_blank"
                    noopener="true"
                    noreferrer="true"
                  >
                    Visitar
                  </Link>
                </motion.div>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
}
