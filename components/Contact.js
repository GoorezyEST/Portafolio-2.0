import React, { useEffect, useRef } from "react";
import styles from "@/styles/modules/contact.module.css";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGlobal } from "@/context/GlobalContext";

export default function Contact() {
  const trigger = useRef(null);
  const title = useRef(null);
  const linkedin = useRef(null);
  const github = useRef(null);
  const { device } = useGlobal();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: trigger.current,
            start: "top 75%",
            end: "bottom 75%",
            toggleActions: "play reverse play reverse",
          },
        })
        .from(title.current, {
          opacity: 0,
          scale: 0,
          duration: 0.2,
        })
        .from(linkedin.current, {
          scale: 0,
          duration: 0.2,
        })
        .from(github.current, {
          scale: 0,
          duration: 0.2,
        });
    });

    return () => context.revert();
  }, []);

  const openTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      {!device && (
        <section className={styles.container} ref={trigger}>
          <div className={styles.svg_container} ref={title}>
            <svg
              width="745"
              height="94"
              viewBox="0 0 745 94"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.839966 47.56C0.839966 38.6 2.63197 30.6213 6.21597 23.624C9.8853 16.6267 15.0906 11.208 21.832 7.368C28.5733 3.44266 36.5093 1.48 45.64 1.48C53.4906 1.48 60.488 2.97333 66.632 5.96C72.8613 8.86133 77.896 13 81.736 18.376C85.6613 23.752 88.264 30.024 89.544 37.192H59.592C58.2266 34.2053 56.264 31.9013 53.704 30.28C51.2293 28.5733 48.3706 27.72 45.128 27.72C40.3493 27.72 36.552 29.512 33.736 33.096C31.0053 36.68 29.64 41.5013 29.64 47.56C29.64 53.6187 31.0053 58.44 33.736 62.024C36.552 65.608 40.3493 67.4 45.128 67.4C48.3706 67.4 51.2293 66.5893 53.704 64.968C56.264 63.2613 58.2266 60.9147 59.592 57.928H89.544C88.264 65.096 85.6613 71.368 81.736 76.744C77.896 82.12 72.8613 86.3013 66.632 89.288C60.488 92.1893 53.4906 93.64 45.64 93.64C36.5093 93.64 28.5733 91.72 21.832 87.88C15.0906 83.9547 9.8853 78.4933 6.21597 71.496C2.63197 64.4987 0.839966 56.52 0.839966 47.56Z"
                fill="var(--white-main)"
              />
              <path
                d="M143.935 93.896C135.402 93.896 127.551 91.8907 120.383 87.88C113.3 83.8693 107.668 78.3227 103.487 71.24C99.3056 64.1573 97.215 56.1787 97.215 47.304C97.215 38.4293 99.3056 30.4507 103.487 23.368C107.668 16.2853 113.3 10.7813 120.383 6.856C127.551 2.84533 135.402 0.839996 143.935 0.839996C152.468 0.839996 160.276 2.84533 167.359 6.856C174.442 10.7813 180.031 16.2853 184.127 23.368C188.308 30.4507 190.399 38.4293 190.399 47.304C190.399 56.1787 188.308 64.1573 184.127 71.24C180.031 78.3227 174.399 83.8693 167.231 87.88C160.148 91.8907 152.383 93.896 143.935 93.896ZM143.935 67.4C149.567 67.4 153.919 65.608 156.991 62.024C160.063 58.3547 161.599 53.448 161.599 47.304C161.599 41.0747 160.063 36.168 156.991 32.584C153.919 28.9147 149.567 27.08 143.935 27.08C138.218 27.08 133.823 28.9147 130.751 32.584C127.679 36.168 126.143 41.0747 126.143 47.304C126.143 53.448 127.679 58.3547 130.751 62.024C133.823 65.608 138.218 67.4 143.935 67.4Z"
                fill="var(--white-main)"
              />
              <path
                d="M287.562 93H259.146L229.066 47.432V93H200.65V2.376H229.066L259.146 48.712V2.376H287.562V93Z"
                fill="var(--white-main)"
              />
              <path
                d="M371.568 2.376V24.904H347.504V93H319.088V24.904H295.28V2.376H371.568Z"
                fill="var(--white-main)"
              />
              <path
                d="M437.387 79.304H407.179L402.699 93H372.875L406.027 2.376H438.795L471.819 93H441.867L437.387 79.304ZM430.475 57.928L422.283 32.712L414.091 57.928H430.475Z"
                fill="var(--white-main)"
              />
              <path
                d="M475.715 47.56C475.715 38.6 477.507 30.6213 481.091 23.624C484.76 16.6267 489.966 11.208 496.707 7.368C503.448 3.44266 511.384 1.48 520.515 1.48C528.366 1.48 535.363 2.97333 541.507 5.96C547.736 8.86133 552.771 13 556.611 18.376C560.536 23.752 563.139 30.024 564.419 37.192H534.467C533.102 34.2053 531.139 31.9013 528.579 30.28C526.104 28.5733 523.246 27.72 520.003 27.72C515.224 27.72 511.427 29.512 508.611 33.096C505.88 36.68 504.515 41.5013 504.515 47.56C504.515 53.6187 505.88 58.44 508.611 62.024C511.427 65.608 515.224 67.4 520.003 67.4C523.246 67.4 526.104 66.5893 528.579 64.968C531.139 63.2613 533.102 60.9147 534.467 57.928H564.419C563.139 65.096 560.536 71.368 556.611 76.744C552.771 82.12 547.736 86.3013 541.507 89.288C535.363 92.1893 528.366 93.64 520.515 93.64C511.384 93.64 503.448 91.72 496.707 87.88C489.966 83.9547 484.76 78.4933 481.091 71.496C477.507 64.4987 475.715 56.52 475.715 47.56Z"
                fill="var(--white-main)"
              />
              <path
                d="M645.818 2.376V24.904H621.754V93H593.338V24.904H569.53V2.376H645.818Z"
                fill="var(--white-main)"
              />
              <path
                d="M697.685 93.896C689.152 93.896 681.301 91.8907 674.133 87.88C667.05 83.8693 661.418 78.3227 657.237 71.24C653.056 64.1573 650.965 56.1787 650.965 47.304C650.965 38.4293 653.056 30.4507 657.237 23.368C661.418 16.2853 667.05 10.7813 674.133 6.856C681.301 2.84533 689.152 0.839996 697.685 0.839996C706.218 0.839996 714.026 2.84533 721.109 6.856C728.192 10.7813 733.781 16.2853 737.877 23.368C742.058 30.4507 744.149 38.4293 744.149 47.304C744.149 56.1787 742.058 64.1573 737.877 71.24C733.781 78.3227 728.149 83.8693 720.981 87.88C713.898 91.8907 706.133 93.896 697.685 93.896ZM697.685 67.4C703.317 67.4 707.669 65.608 710.741 62.024C713.813 58.3547 715.349 53.448 715.349 47.304C715.349 41.0747 713.813 36.168 710.741 32.584C707.669 28.9147 703.317 27.08 697.685 27.08C691.968 27.08 687.573 28.9147 684.501 32.584C681.429 36.168 679.893 41.0747 679.893 47.304C679.893 53.448 681.429 58.3547 684.501 62.024C687.573 65.608 691.968 67.4 697.685 67.4Z"
                fill="var(--white-main)"
              />
            </svg>
          </div>
          <div className={styles.social_container}>
            <div
              className={styles.social}
              onClick={() => {
                openTab("https://www.linkedin.com/in/franco-espinosa/");
              }}
              ref={linkedin}
            >
              <div className={styles.after}></div>
              <div className={styles.before}></div>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM16.9605 19.8778H11.5216V36.2196H16.9605V19.8778ZM17.3188 14.8227C17.2835 13.2204 16.1377 12 14.277 12C12.4164 12 11.2 13.2204 11.2 14.8227C11.2 16.3918 12.3805 17.6473 14.2064 17.6473H14.2412C16.1377 17.6473 17.3188 16.3918 17.3188 14.8227ZM36.5754 26.8497C36.5754 21.8303 33.8922 19.4941 30.3131 19.4941C27.4254 19.4941 26.1326 21.0802 25.4107 22.1929V19.8783H19.9711C20.0428 21.4117 19.9711 36.22 19.9711 36.22H25.4107V27.0934C25.4107 26.605 25.446 26.1178 25.5898 25.7681C25.9829 24.7924 26.8779 23.7822 28.3805 23.7822C30.3494 23.7822 31.1365 25.2807 31.1365 27.4767V36.2196H36.5752L36.5754 26.8497Z"
                  fill="var(--black-main)"
                />
              </svg>
            </div>

            <div
              className={styles.social}
              onClick={() => {
                openTab("https://github.com/GoorezyEST");
              }}
              ref={github}
            >
              <div className={styles.after}></div>
              <div className={styles.before}></div>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.0432 0.179932C10.8147 0.179932 0.0876465 11.0878 0.0876465 24.5445C0.0876465 35.3096 6.95165 44.4426 16.4699 47.6643C17.6671 47.8899 18.1067 47.1358 18.1067 46.4922C18.1067 45.9112 18.0845 43.9919 18.0742 41.956C11.4097 43.4299 10.0034 39.0812 10.0034 39.0812C8.9137 36.265 7.34358 35.5161 7.34358 35.5161C5.17009 34.0039 7.50742 34.035 7.50742 34.035C9.91297 34.2065 11.1796 36.5458 11.1796 36.5458C13.3162 40.2707 16.7837 39.1938 18.1507 38.5712C18.3657 36.9969 18.9866 35.9212 19.6716 35.3132C14.3508 34.6971 8.7574 32.6079 8.7574 23.2719C8.7574 20.6118 9.6932 18.4383 11.2256 16.732C10.9769 16.1179 10.1569 13.6402 11.4577 10.2841C11.4577 10.2841 13.4693 9.62928 18.0472 12.7816C19.9581 12.2418 22.0074 11.971 24.0432 11.9618C26.0791 11.971 28.13 12.2418 30.0444 12.7816C34.6167 9.62928 36.6256 10.2841 36.6256 10.2841C37.9295 13.6402 37.1091 16.1179 36.8604 16.732C38.3964 18.4383 39.3259 20.6118 39.3259 23.2719C39.3259 32.6301 33.7218 34.6906 28.3874 35.2938C29.2467 36.0499 30.0123 37.5327 30.0123 39.8059C30.0123 43.0655 29.9845 45.6893 29.9845 46.4922C29.9845 47.1406 30.4157 47.9003 31.63 47.6611C41.1431 44.4357 47.9984 35.3059 47.9984 24.5445C47.9984 11.0878 37.273 0.179932 24.0432 0.179932Z"
                  fill="var(--black-main)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.16084 35.1623C9.10808 35.2837 8.92084 35.3196 8.75026 35.2365C8.57651 35.157 8.47892 34.992 8.53525 34.8706C8.58682 34.7459 8.77446 34.7116 8.94781 34.7943C9.12196 34.8742 9.22113 35.0408 9.16084 35.1623Z"
                  fill="var(--black-main)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.1312 36.263C10.0169 36.3707 9.79356 36.3207 9.64203 36.1504C9.48533 35.9805 9.45598 35.7534 9.57181 35.644C9.68963 35.5363 9.90622 35.5867 10.0633 35.7566C10.22 35.9285 10.2506 36.154 10.1312 36.263Z"
                  fill="var(--black-main)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.0757 37.6662C10.9289 37.7699 10.6889 37.6727 10.5405 37.456C10.3938 37.2394 10.3938 36.9795 10.5437 36.8754C10.6925 36.7713 10.9289 36.8649 11.0793 37.08C11.2256 37.2999 11.2256 37.5601 11.0757 37.6662Z"
                  fill="var(--black-main)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.3697 39.0219C12.2384 39.1692 11.9587 39.1296 11.754 38.9287C11.5446 38.7322 11.4863 38.4534 11.618 38.3062C11.7509 38.1585 12.0321 38.2 12.2384 38.3994C12.4463 38.5954 12.5097 38.8763 12.3697 39.0219Z"
                  fill="var(--black-main)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.1548 39.8091C14.0969 39.9999 13.8275 40.0867 13.5562 40.0056C13.2853 39.9221 13.1079 39.6985 13.1627 39.5057C13.219 39.3136 13.4896 39.2232 13.7629 39.31C14.0334 39.3931 14.2112 39.615 14.1548 39.8091Z"
                  fill="var(--black-main)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.1153 39.9552C16.122 40.1561 15.8919 40.3227 15.6071 40.3259C15.3207 40.3328 15.089 40.1702 15.0859 39.9725C15.0859 39.7696 15.3108 39.6045 15.5972 39.5997C15.882 39.594 16.1153 39.7554 16.1153 39.9552Z"
                  fill="var(--black-main)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.9397 39.6392C17.9738 39.8353 17.7758 40.0367 17.493 40.0899C17.2149 40.142 16.9575 40.0209 16.9222 39.8264C16.8876 39.6255 17.0892 39.4242 17.3669 39.3721C17.6501 39.3221 17.9036 39.4399 17.9397 39.6392Z"
                  fill="var(--black-main)"
                />
              </svg>
            </div>
          </div>
        </section>
      )}
      {device && (
        <section className={styles.phone_container}>
          <div className={styles.social_container}>
            <motion.div
              className={styles.social}
              onClick={() => {
                openTab("https://www.linkedin.com/in/franco-espinosa/");
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={false}
              transition={{
                duration: 0.25,
                delay: 0.25,
              }}
            >
              <div className={styles.after}></div>
              <div className={styles.before}></div>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM16.9605 19.8778H11.5216V36.2196H16.9605V19.8778ZM17.3188 14.8227C17.2835 13.2204 16.1377 12 14.277 12C12.4164 12 11.2 13.2204 11.2 14.8227C11.2 16.3918 12.3805 17.6473 14.2064 17.6473H14.2412C16.1377 17.6473 17.3188 16.3918 17.3188 14.8227ZM36.5754 26.8497C36.5754 21.8303 33.8922 19.4941 30.3131 19.4941C27.4254 19.4941 26.1326 21.0802 25.4107 22.1929V19.8783H19.9711C20.0428 21.4117 19.9711 36.22 19.9711 36.22H25.4107V27.0934C25.4107 26.605 25.446 26.1178 25.5898 25.7681C25.9829 24.7924 26.8779 23.7822 28.3805 23.7822C30.3494 23.7822 31.1365 25.2807 31.1365 27.4767V36.2196H36.5752L36.5754 26.8497Z"
                  fill="var(--black-main)"
                />
              </svg>
            </motion.div>
            <motion.div
              className={styles.social}
              onClick={() => {
                openTab("https://github.com/GoorezyEST");
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={false}
              transition={{
                duration: 0.25,
                delay: 0.25,
              }}
            >
              <div className={styles.after}></div>
              <div className={styles.before}></div>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.0432 0.179932C10.8147 0.179932 0.0876465 11.0878 0.0876465 24.5445C0.0876465 35.3096 6.95165 44.4426 16.4699 47.6643C17.6671 47.8899 18.1067 47.1358 18.1067 46.4922C18.1067 45.9112 18.0845 43.9919 18.0742 41.956C11.4097 43.4299 10.0034 39.0812 10.0034 39.0812C8.9137 36.265 7.34358 35.5161 7.34358 35.5161C5.17009 34.0039 7.50742 34.035 7.50742 34.035C9.91297 34.2065 11.1796 36.5458 11.1796 36.5458C13.3162 40.2707 16.7837 39.1938 18.1507 38.5712C18.3657 36.9969 18.9866 35.9212 19.6716 35.3132C14.3508 34.6971 8.7574 32.6079 8.7574 23.2719C8.7574 20.6118 9.6932 18.4383 11.2256 16.732C10.9769 16.1179 10.1569 13.6402 11.4577 10.2841C11.4577 10.2841 13.4693 9.62928 18.0472 12.7816C19.9581 12.2418 22.0074 11.971 24.0432 11.9618C26.0791 11.971 28.13 12.2418 30.0444 12.7816C34.6167 9.62928 36.6256 10.2841 36.6256 10.2841C37.9295 13.6402 37.1091 16.1179 36.8604 16.732C38.3964 18.4383 39.3259 20.6118 39.3259 23.2719C39.3259 32.6301 33.7218 34.6906 28.3874 35.2938C29.2467 36.0499 30.0123 37.5327 30.0123 39.8059C30.0123 43.0655 29.9845 45.6893 29.9845 46.4922C29.9845 47.1406 30.4157 47.9003 31.63 47.6611C41.1431 44.4357 47.9984 35.3059 47.9984 24.5445C47.9984 11.0878 37.273 0.179932 24.0432 0.179932Z"
                  fill="var(--black-main)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.16084 35.1623C9.10808 35.2837 8.92084 35.3196 8.75026 35.2365C8.57651 35.157 8.47892 34.992 8.53525 34.8706C8.58682 34.7459 8.77446 34.7116 8.94781 34.7943C9.12196 34.8742 9.22113 35.0408 9.16084 35.1623Z"
                  fill="var(--black-main)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.1312 36.263C10.0169 36.3707 9.79356 36.3207 9.64203 36.1504C9.48533 35.9805 9.45598 35.7534 9.57181 35.644C9.68963 35.5363 9.90622 35.5867 10.0633 35.7566C10.22 35.9285 10.2506 36.154 10.1312 36.263Z"
                  fill="var(--black-main)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.0757 37.6662C10.9289 37.7699 10.6889 37.6727 10.5405 37.456C10.3938 37.2394 10.3938 36.9795 10.5437 36.8754C10.6925 36.7713 10.9289 36.8649 11.0793 37.08C11.2256 37.2999 11.2256 37.5601 11.0757 37.6662Z"
                  fill="var(--black-main)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.3697 39.0219C12.2384 39.1692 11.9587 39.1296 11.754 38.9287C11.5446 38.7322 11.4863 38.4534 11.618 38.3062C11.7509 38.1585 12.0321 38.2 12.2384 38.3994C12.4463 38.5954 12.5097 38.8763 12.3697 39.0219Z"
                  fill="var(--black-main)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.1548 39.8091C14.0969 39.9999 13.8275 40.0867 13.5562 40.0056C13.2853 39.9221 13.1079 39.6985 13.1627 39.5057C13.219 39.3136 13.4896 39.2232 13.7629 39.31C14.0334 39.3931 14.2112 39.615 14.1548 39.8091Z"
                  fill="var(--black-main)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.1153 39.9552C16.122 40.1561 15.8919 40.3227 15.6071 40.3259C15.3207 40.3328 15.089 40.1702 15.0859 39.9725C15.0859 39.7696 15.3108 39.6045 15.5972 39.5997C15.882 39.594 16.1153 39.7554 16.1153 39.9552Z"
                  fill="var(--black-main)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.9397 39.6392C17.9738 39.8353 17.7758 40.0367 17.493 40.0899C17.2149 40.142 16.9575 40.0209 16.9222 39.8264C16.8876 39.6255 17.0892 39.4242 17.3669 39.3721C17.6501 39.3221 17.9036 39.4399 17.9397 39.6392Z"
                  fill="var(--black-main)"
                />
              </svg>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
