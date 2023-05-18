import React from "react";
import styles from "@/styles/modules/landing.module.css";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.logo_container}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={false}
        transition={{
          duration: 0.75,
          delay: 0.1,
        }}
      >
        <svg
          width="270"
          height="266"
          viewBox="0 0 270 266"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.logo_svg}
        >
          <path
            d="M94.2424 196.791L134.848 266L175.455 197.089H147.879L134.848 219.165L121.515 196.791L135.152 173.821H188.788L202.121 150.851H148.182L175.455 104.911H202.121L189.091 127.582H216.061L243.03 81.642H161.515L94.2424 196.791Z"
            fill="var(--cyan)"
          />
          <path
            d="M80.9091 173.523L0 36H135H270L256.667 58.9702H40.6061L54.2424 81.9403H135.152L107.879 128.179L94.2424 104.91H67.5758L94.5455 150.851L80.9091 173.523Z"
            fill="var(--pink)"
          />
          <path
            d="M33.816 9.08V12.824H27.048V15.8H32.04V19.376H27.048V26H22.344V9.08H33.816ZM44.3651 26L41.0051 19.76H40.5011V26H35.7971V9.08H43.2131C44.5731 9.08 45.7251 9.32 46.6691 9.8C47.6131 10.264 48.3251 10.912 48.8051 11.744C49.2851 12.56 49.5251 13.48 49.5251 14.504C49.5251 15.656 49.2051 16.672 48.5651 17.552C47.9411 18.416 47.0211 19.032 45.8051 19.4L49.6211 26H44.3651ZM40.5011 16.544H42.8291C43.4691 16.544 43.9491 16.392 44.2691 16.088C44.5891 15.784 44.7491 15.344 44.7491 14.768C44.7491 14.224 44.5811 13.8 44.2451 13.496C43.9251 13.176 43.4531 13.016 42.8291 13.016H40.5011V16.544ZM62.3683 23.24H56.3683L55.4563 26H50.5123L56.6803 9.08H62.1043L68.2483 26H63.2803L62.3683 23.24ZM61.1923 19.64L59.3683 14.168L57.5683 19.64H61.1923ZM85.4535 26H80.7495L74.4855 16.544V26H69.7815V9.08H74.4855L80.7495 18.656V9.08H85.4535V26ZM87.5571 17.504C87.5571 15.84 87.9011 14.36 88.5891 13.064C89.2931 11.752 90.2851 10.736 91.5651 10.016C92.8451 9.28 94.3171 8.912 95.9811 8.912C98.0931 8.912 99.8691 9.48 101.309 10.616C102.749 11.736 103.677 13.264 104.093 15.2H99.0291C98.7251 14.56 98.3011 14.072 97.7571 13.736C97.2291 13.4 96.6131 13.232 95.9091 13.232C94.8211 13.232 93.9491 13.624 93.2931 14.408C92.6531 15.176 92.3331 16.208 92.3331 17.504C92.3331 18.816 92.6531 19.864 93.2931 20.648C93.9491 21.416 94.8211 21.8 95.9091 21.8C96.6131 21.8 97.2291 21.632 97.7571 21.296C98.3011 20.96 98.7251 20.472 99.0291 19.832H104.093C103.677 21.768 102.749 23.304 101.309 24.44C99.8691 25.56 98.0931 26.12 95.9811 26.12C94.3171 26.12 92.8451 25.76 91.5651 25.04C90.2851 24.304 89.2931 23.288 88.5891 21.992C87.9011 20.68 87.5571 19.184 87.5571 17.504ZM114.433 26.168C112.849 26.168 111.393 25.8 110.065 25.064C108.737 24.312 107.681 23.28 106.897 21.968C106.129 20.64 105.745 19.144 105.745 17.48C105.745 15.816 106.129 14.328 106.897 13.016C107.681 11.688 108.737 10.656 110.065 9.92C111.393 9.184 112.849 8.816 114.433 8.816C116.033 8.816 117.489 9.184 118.801 9.92C120.129 10.656 121.177 11.688 121.945 13.016C122.713 14.328 123.097 15.816 123.097 17.48C123.097 19.144 122.713 20.64 121.945 21.968C121.177 23.28 120.129 24.312 118.801 25.064C117.473 25.8 116.017 26.168 114.433 26.168ZM114.433 21.8C115.633 21.8 116.577 21.408 117.265 20.624C117.969 19.84 118.321 18.792 118.321 17.48C118.321 16.136 117.969 15.08 117.265 14.312C116.577 13.528 115.633 13.136 114.433 13.136C113.217 13.136 112.265 13.528 111.577 14.312C110.889 15.08 110.545 16.136 110.545 17.48C110.545 18.808 110.889 19.864 111.577 20.648C112.265 21.416 113.217 21.8 114.433 21.8ZM134.509 12.848V15.608H139.909V19.184H134.509V22.232H140.629V26H129.805V9.08H140.629V12.848H134.509ZM149.337 26.168C147.369 26.168 145.753 25.704 144.489 24.776C143.225 23.832 142.545 22.488 142.449 20.744H147.465C147.513 21.336 147.689 21.768 147.993 22.04C148.297 22.312 148.689 22.448 149.169 22.448C149.601 22.448 149.953 22.344 150.225 22.136C150.513 21.912 150.657 21.608 150.657 21.224C150.657 20.728 150.425 20.344 149.961 20.072C149.497 19.8 148.745 19.496 147.705 19.16C146.601 18.792 145.705 18.44 145.017 18.104C144.345 17.752 143.753 17.248 143.241 16.592C142.745 15.92 142.497 15.048 142.497 13.976C142.497 12.888 142.769 11.96 143.313 11.192C143.857 10.408 144.609 9.816 145.569 9.416C146.529 9.016 147.617 8.816 148.833 8.816C150.801 8.816 152.369 9.28 153.537 10.208C154.721 11.12 155.353 12.408 155.433 14.072H150.321C150.305 13.56 150.145 13.176 149.841 12.92C149.553 12.664 149.177 12.536 148.713 12.536C148.361 12.536 148.073 12.64 147.849 12.848C147.625 13.056 147.513 13.352 147.513 13.736C147.513 14.056 147.633 14.336 147.873 14.576C148.129 14.8 148.441 15 148.809 15.176C149.177 15.336 149.721 15.544 150.441 15.8C151.513 16.168 152.393 16.536 153.081 16.904C153.785 17.256 154.385 17.76 154.881 18.416C155.393 19.056 155.649 19.872 155.649 20.864C155.649 21.872 155.393 22.776 154.881 23.576C154.385 24.376 153.657 25.008 152.697 25.472C151.753 25.936 150.633 26.168 149.337 26.168ZM171.204 14.72C171.204 15.744 170.964 16.68 170.484 17.528C170.02 18.36 169.308 19.032 168.348 19.544C167.404 20.04 166.244 20.288 164.868 20.288H162.54V26H157.836V9.08H164.868C166.228 9.08 167.38 9.32 168.324 9.8C169.284 10.28 170.004 10.944 170.484 11.792C170.964 12.64 171.204 13.616 171.204 14.72ZM164.412 16.544C165.74 16.544 166.404 15.936 166.404 14.72C166.404 13.488 165.74 12.872 164.412 12.872H162.54V16.544H164.412ZM177.798 9.08V26H173.094V9.08H177.798ZM196.149 26H191.445L185.181 16.544V26H180.477V9.08H185.181L191.445 18.656V9.08H196.149V26ZM206.94 26.168C205.356 26.168 203.9 25.8 202.572 25.064C201.244 24.312 200.188 23.28 199.404 21.968C198.636 20.64 198.252 19.144 198.252 17.48C198.252 15.816 198.636 14.328 199.404 13.016C200.188 11.688 201.244 10.656 202.572 9.92C203.9 9.184 205.356 8.816 206.94 8.816C208.54 8.816 209.996 9.184 211.308 9.92C212.636 10.656 213.684 11.688 214.452 13.016C215.22 14.328 215.604 15.816 215.604 17.48C215.604 19.144 215.22 20.64 214.452 21.968C213.684 23.28 212.636 24.312 211.308 25.064C209.98 25.8 208.524 26.168 206.94 26.168ZM206.94 21.8C208.14 21.8 209.084 21.408 209.772 20.624C210.476 19.84 210.828 18.792 210.828 17.48C210.828 16.136 210.476 15.08 209.772 14.312C209.084 13.528 208.14 13.136 206.94 13.136C205.724 13.136 204.772 13.528 204.084 14.312C203.396 15.08 203.052 16.136 203.052 17.48C203.052 18.808 203.396 19.864 204.084 20.648C204.772 21.416 205.724 21.8 206.94 21.8ZM224.103 26.168C222.135 26.168 220.519 25.704 219.255 24.776C217.991 23.832 217.311 22.488 217.215 20.744H222.231C222.279 21.336 222.455 21.768 222.759 22.04C223.063 22.312 223.455 22.448 223.935 22.448C224.367 22.448 224.719 22.344 224.991 22.136C225.279 21.912 225.423 21.608 225.423 21.224C225.423 20.728 225.191 20.344 224.727 20.072C224.263 19.8 223.511 19.496 222.471 19.16C221.367 18.792 220.471 18.44 219.783 18.104C219.111 17.752 218.519 17.248 218.007 16.592C217.511 15.92 217.263 15.048 217.263 13.976C217.263 12.888 217.535 11.96 218.079 11.192C218.623 10.408 219.375 9.816 220.335 9.416C221.295 9.016 222.383 8.816 223.599 8.816C225.567 8.816 227.135 9.28 228.303 10.208C229.487 11.12 230.119 12.408 230.199 14.072H225.087C225.071 13.56 224.911 13.176 224.607 12.92C224.319 12.664 223.943 12.536 223.479 12.536C223.127 12.536 222.839 12.64 222.615 12.848C222.391 13.056 222.279 13.352 222.279 13.736C222.279 14.056 222.399 14.336 222.639 14.576C222.895 14.8 223.207 15 223.575 15.176C223.943 15.336 224.487 15.544 225.207 15.8C226.279 16.168 227.159 16.536 227.847 16.904C228.551 17.256 229.151 17.76 229.647 18.416C230.159 19.056 230.415 19.872 230.415 20.864C230.415 21.872 230.159 22.776 229.647 23.576C229.151 24.376 228.423 25.008 227.463 25.472C226.519 25.936 225.399 26.168 224.103 26.168ZM243.306 23.24H237.306L236.394 26H231.45L237.618 9.08H243.042L249.186 26H244.218L243.306 23.24ZM242.13 19.64L240.306 14.168L238.506 19.64H242.13Z"
            fill="white"
          />
        </svg>
      </motion.div>
    </div>
  );
}
