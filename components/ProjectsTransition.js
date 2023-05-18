import React, { useEffect, useRef } from "react";
import styles from "@/styles/modules/project_transition.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function ProjectsTransition() {
  const frameRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const anim = gsap.to(frameRef.current, {
      scrollTrigger: {
        start: "top top",
        trigger: triggerRef.current,
        pin: true,
        scrub: 1,
      },
      width: "25%",
      height: "25%",
    });

    return () => anim.kill();
  }, []);

  return (
    <div className={styles.transition_container} ref={triggerRef}>
      <div className={styles.transition} ref={frameRef}>
        <svg
          width="811"
          height="97"
          viewBox="0 0 811 97"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 1.90909H31.4545L53.0909 54.6364H54.1818L75.8182 1.90909H107.273V95H82.5455V41.1818H81.8182L61.0909 94.2727H46.1818L25.4545 40.8182H24.7273V95H0V1.90909Z"
            fill="var(--cyan)"
          />
          <path
            d="M144.523 1.90909V95H119.25V1.90909H144.523Z"
            fill="var(--cyan)"
          />
          <path
            d="M179.455 22.2727V1.90909H260.364V22.2727H232.364V95H207.455V22.2727H179.455Z"
            fill="var(--cyan)"
          />
          <path
            d="M269.875 95V1.90909H310.057C316.966 1.90909 323.011 3.16666 328.193 5.68182C333.375 8.19697 337.405 11.8182 340.284 16.5455C343.163 21.2727 344.602 26.9394 344.602 33.5455C344.602 40.2121 343.117 45.8333 340.148 50.4091C337.208 54.9848 333.072 58.4394 327.739 60.7727C322.436 63.1061 316.239 64.2727 309.148 64.2727H285.148V44.6364H304.057C307.027 44.6364 309.557 44.2727 311.648 43.5455C313.769 42.7879 315.39 41.5909 316.511 39.9545C317.663 38.3182 318.239 36.1818 318.239 33.5455C318.239 30.8788 317.663 28.7121 316.511 27.0455C315.39 25.3485 313.769 24.1061 311.648 23.3182C309.557 22.5 307.027 22.0909 304.057 22.0909H295.148V95H269.875ZM324.42 52.2727L347.693 95H320.239L297.511 52.2727H324.42Z"
            fill="var(--cyan)"
          />
          <path
            d="M379.557 95H352.284L383.011 1.90909H417.557L448.284 95H421.011L400.648 27.5455H399.92L379.557 95ZM374.466 58.2727H425.739V77.1818H374.466V58.2727Z"
            fill="var(--cyan)"
          />
          <path
            d="M457.25 95V1.90909H497.614C504.705 1.90909 510.659 2.86363 515.477 4.77273C520.326 6.68182 523.977 9.37878 526.432 12.8636C528.917 16.3485 530.159 20.4545 530.159 25.1818C530.159 28.6061 529.402 31.7273 527.886 34.5455C526.402 37.3636 524.311 39.7273 521.614 41.6364C518.917 43.5151 515.765 44.8182 512.159 45.5455V46.4545C516.159 46.6061 519.795 47.6212 523.068 49.5C526.341 51.3485 528.947 53.9091 530.886 57.1818C532.826 60.4242 533.795 64.2424 533.795 68.6364C533.795 73.7273 532.462 78.2576 529.795 82.2273C527.159 86.197 523.401 89.3182 518.523 91.5909C513.644 93.8636 507.826 95 501.068 95H457.25ZM482.523 74.8182H494.341C498.583 74.8182 501.765 74.0303 503.886 72.4545C506.008 70.8485 507.068 68.4848 507.068 65.3636C507.068 63.1818 506.568 61.3333 505.568 59.8182C504.568 58.303 503.144 57.1515 501.295 56.3636C499.477 55.5758 497.28 55.1818 494.705 55.1818H482.523V74.8182ZM482.523 39.5455H492.886C495.098 39.5455 497.053 39.197 498.75 38.5C500.447 37.803 501.765 36.803 502.705 35.5C503.674 34.1667 504.159 32.5455 504.159 30.6364C504.159 27.7576 503.129 25.5606 501.068 24.0455C499.008 22.5 496.402 21.7273 493.25 21.7273H482.523V39.5455Z"
            fill="var(--cyan)"
          />
          <path
            d="M566.932 95H539.659L570.386 1.90909H604.932L635.659 95H608.386L588.023 27.5455H587.295L566.932 95ZM561.841 58.2727H613.114V77.1818H561.841V58.2727Z"
            fill="var(--cyan)"
          />
          <path
            d="M682.989 1.90909H707.898V65.7273C707.867 71.7879 706.337 77.1212 703.307 81.7273C700.307 86.303 696.155 89.8788 690.852 92.4545C685.58 95 679.504 96.2727 672.625 96.2727C666.655 96.2727 661.201 95.2424 656.261 93.1818C651.322 91.0909 647.383 87.8182 644.443 83.3636C641.504 78.8788 640.049 73.0606 640.08 65.9091H665.352C665.443 68.2424 665.837 70.2121 666.534 71.8182C667.261 73.4242 668.261 74.6364 669.534 75.4545C670.837 76.2424 672.413 76.6364 674.261 76.6364C676.14 76.6364 677.716 76.2273 678.989 75.4091C680.292 74.5909 681.277 73.3788 681.943 71.7727C682.61 70.1364 682.958 68.1212 682.989 65.7273V1.90909Z"
            fill="var(--cyan)"
          />
          <path
            d="M810.057 48.4545C810.057 58.8182 808.042 67.5606 804.011 74.6818C799.981 81.7727 794.542 87.1515 787.693 90.8182C780.845 94.4545 773.208 96.2727 764.784 96.2727C756.299 96.2727 748.633 94.4394 741.784 90.7727C734.966 87.0758 729.542 81.6818 725.511 74.5909C721.511 67.4697 719.511 58.7576 719.511 48.4545C719.511 38.0909 721.511 29.3636 725.511 22.2727C729.542 15.1515 734.966 9.77272 741.784 6.13636C748.633 2.46969 756.299 0.63636 764.784 0.63636C773.208 0.63636 780.845 2.46969 787.693 6.13636C794.542 9.77272 799.981 15.1515 804.011 22.2727C808.042 29.3636 810.057 38.0909 810.057 48.4545ZM784.057 48.4545C784.057 42.8788 783.314 38.1818 781.83 34.3636C780.375 30.5151 778.208 27.6061 775.33 25.6364C772.481 23.6364 768.966 22.6364 764.784 22.6364C760.602 22.6364 757.072 23.6364 754.193 25.6364C751.345 27.6061 749.178 30.5151 747.693 34.3636C746.239 38.1818 745.511 42.8788 745.511 48.4545C745.511 54.0303 746.239 58.7424 747.693 62.5909C749.178 66.4091 751.345 69.3182 754.193 71.3182C757.072 73.2879 760.602 74.2727 764.784 74.2727C768.966 74.2727 772.481 73.2879 775.33 71.3182C778.208 69.3182 780.375 66.4091 781.83 62.5909C783.314 58.7424 784.057 54.0303 784.057 48.4545Z"
            fill="var(--cyan)"
          />
        </svg>
      </div>
    </div>
  );
}
