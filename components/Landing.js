import React from "react";
import styles from "@/styles/modules/landing.module.css";

export default function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.dots_top}></div>
      <div className={styles.dots_bottom}></div>
      <div className={styles.logo}>
        <svg
          width="84"
          height="80"
          viewBox="0 0 84 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.3152 58.4718L41.9462 80L54.5771 58.5646H45.9994L41.9462 65.4313L37.7987 58.4718L42.0404 51.3267H58.7246L62.8721 44.1815H46.0936L54.5771 29.8913H62.8721L58.8189 36.9436H67.2081L75.5974 22.6534H50.2411L29.3152 58.4718Z"
            fill="var(--white-main)"
          />
          <path
            d="M25.1677 51.2339L0 8.45587H41.9933H83.9866L79.8391 15.601H12.631L16.8727 22.7461H42.0404L33.5569 37.1292L29.3152 29.8913H21.0202L29.4094 44.1815L25.1677 51.2339Z"
            fill="var(--white-main)"
          />
          <path
            d="M10.5188 0.0821199V1.24673H8.41358V2.17245H9.9664V3.28481H8.41358V5.34528H6.95035V0.0821199H10.5188Z"
            fill="var(--white-main)"
          />
          <path
            d="M13.8003 5.34528L12.7551 3.40426H12.5983V5.34528H11.1351V0.0821199H13.4419C13.865 0.0821199 14.2233 0.156775 14.517 0.306084C14.8106 0.450417 15.0321 0.651985 15.1814 0.910788C15.3307 1.16461 15.4053 1.45079 15.4053 1.76932C15.4053 2.12766 15.3058 2.4437 15.1067 2.71743C14.9126 2.98619 14.6264 3.1778 14.2482 3.29227L15.4352 5.34528H13.8003ZM12.5983 2.40388H13.3225C13.5216 2.40388 13.6709 2.3566 13.7704 2.26204C13.8699 2.16748 13.9197 2.03061 13.9197 1.85144C13.9197 1.68222 13.8675 1.55033 13.7629 1.45577C13.6634 1.35623 13.5166 1.30646 13.3225 1.30646H12.5983V2.40388Z"
            fill="var(--white-main)"
          />
          <path
            d="M19.4004 4.48675H17.534L17.2503 5.34528H15.7124L17.631 0.0821199H19.3182L21.2294 5.34528H19.6841L19.4004 4.48675ZM19.0346 3.36693L18.4672 1.6648L17.9073 3.36693H19.0346Z"
            fill="var(--white-main)"
          />
          <path
            d="M26.5813 5.34528H25.118L23.1696 2.40388V5.34528H21.7063V0.0821199H23.1696L25.118 3.06084V0.0821199H26.5813V5.34528Z"
            fill="var(--white-main)"
          />
          <path
            d="M27.2356 2.7025C27.2356 2.18489 27.3426 1.72452 27.5566 1.32139C27.7756 0.913276 28.0842 0.597238 28.4823 0.373274C28.8805 0.144332 29.3384 0.0298618 29.856 0.0298618C30.513 0.0298618 31.0654 0.206545 31.5133 0.55991C31.9613 0.908299 32.2499 1.3836 32.3793 1.98582H30.8041C30.7095 1.78674 30.5777 1.63494 30.4084 1.53042C30.2442 1.42591 30.0526 1.37365 29.8336 1.37365C29.4952 1.37365 29.2239 1.49558 29.0199 1.73946C28.8208 1.97835 28.7212 2.29937 28.7212 2.7025C28.7212 3.11061 28.8208 3.43661 29.0199 3.68048C29.2239 3.91937 29.4952 4.03882 29.8336 4.03882C30.0526 4.03882 30.2442 3.98656 30.4084 3.88205C30.5777 3.77753 30.7095 3.62573 30.8041 3.42665H32.3793C32.2499 4.02887 31.9613 4.50666 31.5133 4.86002C31.0654 5.20841 30.513 5.38261 29.856 5.38261C29.3384 5.38261 28.8805 5.27062 28.4823 5.04666C28.0842 4.81772 27.7756 4.50168 27.5566 4.09855C27.3426 3.69043 27.2356 3.22508 27.2356 2.7025Z"
            fill="var(--white-main)"
          />
          <path
            d="M35.5955 5.39754C35.1028 5.39754 34.6499 5.28307 34.2368 5.05413C33.8237 4.82021 33.4953 4.49919 33.2514 4.09108C33.0125 3.67799 32.893 3.21264 32.893 2.69504C32.893 2.17743 33.0125 1.71457 33.2514 1.30646C33.4953 0.893368 33.8237 0.572353 34.2368 0.343412C34.6499 0.114471 35.1028 0 35.5955 0C36.0932 0 36.5461 0.114471 36.9543 0.343412C37.3673 0.572353 37.6933 0.893368 37.9322 1.30646C38.1711 1.71457 38.2906 2.17743 38.2906 2.69504C38.2906 3.21264 38.1711 3.67799 37.9322 4.09108C37.6933 4.49919 37.3673 4.82021 36.9543 5.05413C36.5412 5.28307 36.0883 5.39754 35.5955 5.39754ZM35.5955 4.03882C35.9688 4.03882 36.2625 3.91689 36.4765 3.67301C36.6955 3.42914 36.8049 3.10315 36.8049 2.69504C36.8049 2.27697 36.6955 1.94849 36.4765 1.70959C36.2625 1.46572 35.9688 1.34379 35.5955 1.34379C35.2173 1.34379 34.9212 1.46572 34.7071 1.70959C34.4931 1.94849 34.3861 2.27697 34.3861 2.69504C34.3861 3.10813 34.4931 3.43661 34.7071 3.68048C34.9212 3.91937 35.2173 4.03882 35.5955 4.03882Z"
            fill="var(--white-main)"
          />
          <path
            d="M41.8405 1.2542V2.11273H43.5203V3.22508H41.8405V4.1732H43.7442V5.34528H40.3773V0.0821199H43.7442V1.2542H41.8405Z"
            fill="var(--white-main)"
          />
          <path
            d="M46.4531 5.39754C45.8409 5.39754 45.3382 5.2532 44.9451 4.96454C44.5519 4.6709 44.3403 4.25283 44.3105 3.71034H45.8708C45.8857 3.89449 45.9404 4.02887 46.035 4.11348C46.1296 4.19808 46.2515 4.24039 46.4008 4.24039C46.5352 4.24039 46.6447 4.20804 46.7293 4.14334C46.8189 4.07366 46.8637 3.9791 46.8637 3.85965C46.8637 3.70536 46.7915 3.58592 46.6472 3.50131C46.5028 3.4167 46.2689 3.32214 45.9454 3.21762C45.602 3.10315 45.3233 2.99365 45.1093 2.88914C44.9003 2.77964 44.7161 2.62287 44.5569 2.41881C44.4026 2.20978 44.3254 1.93853 44.3254 1.60508C44.3254 1.26664 44.41 0.977977 44.5792 0.739082C44.7485 0.49521 44.9824 0.311061 45.281 0.186636C45.5796 0.0622119 45.9181 0 46.2963 0C46.9085 0 47.3962 0.144332 47.7595 0.432997C48.1278 0.716685 48.3244 1.11733 48.3493 1.63494H46.7592C46.7542 1.47567 46.7044 1.35623 46.6099 1.2766C46.5203 1.19696 46.4033 1.15715 46.259 1.15715C46.1495 1.15715 46.0599 1.1895 45.9902 1.2542C45.9205 1.3189 45.8857 1.41097 45.8857 1.53042C45.8857 1.62996 45.923 1.71706 45.9977 1.79171C46.0773 1.86139 46.1744 1.9236 46.2888 1.97835C46.4033 2.02812 46.5725 2.09282 46.7965 2.17245C47.13 2.28692 47.4037 2.40139 47.6177 2.51586C47.8367 2.62536 48.0233 2.78213 48.1776 2.98619C48.3369 3.18527 48.4165 3.43909 48.4165 3.74767C48.4165 4.06122 48.3369 4.34242 48.1776 4.59127C48.0233 4.84012 47.7969 5.03671 47.4982 5.18104C47.2046 5.32537 46.8562 5.39754 46.4531 5.39754Z"
            fill="var(--white-main)"
          />
          <path
            d="M53.255 1.83651C53.255 2.15503 53.1803 2.44619 53.031 2.70997C52.8867 2.96877 52.6652 3.1778 52.3666 3.33707C52.073 3.49135 51.7121 3.5685 51.2841 3.5685H50.56V5.34528H49.0967V0.0821199H51.2841C51.7072 0.0821199 52.0655 0.156775 52.3591 0.306084C52.6578 0.455393 52.8817 0.661938 53.031 0.925719C53.1803 1.1895 53.255 1.49309 53.255 1.83651ZM51.1423 2.40388C51.5554 2.40388 51.7619 2.21476 51.7619 1.83651C51.7619 1.45328 51.5554 1.26166 51.1423 1.26166H50.56V2.40388H51.1423Z"
            fill="var(--white-main)"
          />
          <path
            d="M55.3061 0.0821199V5.34528H53.8428V0.0821199H55.3061Z"
            fill="var(--white-main)"
          />
          <path
            d="M61.0143 5.34528H59.5511L57.6026 2.40388V5.34528H56.1394V0.0821199H57.6026L59.5511 3.06084V0.0821199H61.0143V5.34528Z"
            fill="var(--white-main)"
          />
          <path
            d="M64.3711 5.39754C63.8784 5.39754 63.4255 5.28307 63.0124 5.05413C62.5993 4.82021 62.2709 4.49919 62.027 4.09108C61.7881 3.67799 61.6686 3.21264 61.6686 2.69504C61.6686 2.17743 61.7881 1.71457 62.027 1.30646C62.2709 0.893368 62.5993 0.572353 63.0124 0.343412C63.4255 0.114471 63.8784 0 64.3711 0C64.8688 0 65.3218 0.114471 65.7299 0.343412C66.143 0.572353 66.4689 0.893368 66.7078 1.30646C66.9467 1.71457 67.0662 2.17743 67.0662 2.69504C67.0662 3.21264 66.9467 3.67799 66.7078 4.09108C66.4689 4.49919 66.143 4.82021 65.7299 5.05413C65.3168 5.28307 64.8639 5.39754 64.3711 5.39754ZM64.3711 4.03882C64.7444 4.03882 65.0381 3.91689 65.2521 3.67301C65.4711 3.42914 65.5806 3.10315 65.5806 2.69504C65.5806 2.27697 65.4711 1.94849 65.2521 1.70959C65.0381 1.46572 64.7444 1.34379 64.3711 1.34379C63.9929 1.34379 63.6968 1.46572 63.4828 1.70959C63.2687 1.94849 63.1617 2.27697 63.1617 2.69504C63.1617 3.10813 63.2687 3.43661 63.4828 3.68048C63.6968 3.91937 63.9929 4.03882 64.3711 4.03882Z"
            fill="var(--white-main)"
          />
          <path
            d="M69.7098 5.39754C69.0976 5.39754 68.5949 5.2532 68.2018 4.96454C67.8086 4.6709 67.597 4.25283 67.5672 3.71034H69.1275C69.1424 3.89449 69.1971 4.02887 69.2917 4.11348C69.3863 4.19808 69.5082 4.24039 69.6575 4.24039C69.7919 4.24039 69.9014 4.20804 69.986 4.14334C70.0756 4.07366 70.1204 3.9791 70.1204 3.85965C70.1204 3.70536 70.0482 3.58592 69.9039 3.50131C69.7595 3.4167 69.5256 3.32214 69.2021 3.21762C68.8587 3.10315 68.58 2.99365 68.366 2.88914C68.157 2.77964 67.9728 2.62287 67.8135 2.41881C67.6593 2.20978 67.5821 1.93853 67.5821 1.60508C67.5821 1.26664 67.6667 0.977977 67.8359 0.739082C68.0052 0.49521 68.2391 0.311061 68.5377 0.186636C68.8363 0.0622119 69.1748 0 69.553 0C70.1652 0 70.6529 0.144332 71.0162 0.432997C71.3845 0.716685 71.5811 1.11733 71.606 1.63494H70.0159C70.0109 1.47567 69.9611 1.35623 69.8666 1.2766C69.777 1.19696 69.66 1.15715 69.5157 1.15715C69.4062 1.15715 69.3166 1.1895 69.2469 1.2542C69.1772 1.3189 69.1424 1.41097 69.1424 1.53042C69.1424 1.62996 69.1797 1.71706 69.2544 1.79171C69.334 1.86139 69.4311 1.9236 69.5455 1.97835C69.66 2.02812 69.8292 2.09282 70.0532 2.17245C70.3866 2.28692 70.6604 2.40139 70.8744 2.51586C71.0934 2.62536 71.28 2.78213 71.4343 2.98619C71.5936 3.18527 71.6732 3.43909 71.6732 3.74767C71.6732 4.06122 71.5936 4.34242 71.4343 4.59127C71.28 4.84012 71.0536 5.03671 70.7549 5.18104C70.4613 5.32537 70.1129 5.39754 69.7098 5.39754Z"
            fill="var(--white-main)"
          />
          <path
            d="M75.683 4.48675H73.8167L73.533 5.34528H71.9951L73.9137 0.0821199H75.6009L77.5121 5.34528H75.9667L75.683 4.48675ZM75.3172 3.36693L74.7498 1.6648L74.1899 3.36693H75.3172Z"
            fill="var(--white-main)"
          />
        </svg>
      </div>
      <div className={styles.welcome}>
        <svg
          width="908"
          height="169"
          viewBox="0 0 908 169"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M190.299 22.96C192.902 23.5147 194.993 24.816 196.571 26.864C198.15 28.8693 198.939 31.1733 198.939 33.776C198.939 37.5307 197.617 40.5173 194.971 42.736C192.369 44.912 188.721 46 184.027 46H163.099V1.07201H183.323C187.889 1.07201 191.451 2.11734 194.011 4.208C196.614 6.29867 197.915 9.13601 197.915 12.72C197.915 15.3653 197.211 17.5627 195.803 19.312C194.438 21.0613 192.603 22.2773 190.299 22.96ZM174.043 19.248H181.211C183.003 19.248 184.369 18.864 185.307 18.096C186.289 17.2853 186.779 16.112 186.779 14.576C186.779 13.04 186.289 11.8667 185.307 11.056C184.369 10.2453 183.003 9.84001 181.211 9.84001H174.043V19.248ZM182.107 37.168C183.942 37.168 185.35 36.7627 186.331 35.952C187.355 35.0987 187.867 33.8827 187.867 32.304C187.867 30.7253 187.334 29.488 186.267 28.592C185.243 27.696 183.814 27.248 181.979 27.248H174.043V37.168H182.107Z"
            fill="var(--white-main)"
          />
          <path
            d="M219.431 1.07201V46H208.487V1.07201H219.431Z"
            fill="var(--white-main)"
          />
          <path
            d="M241.506 9.84001V18.928H256.162V27.376H241.506V37.232H258.082V46H230.562V1.07201H258.082V9.84001H241.506Z"
            fill="var(--white-main)"
          />
          <path
            d="M308.579 46H297.635L279.331 18.288V46H268.387V1.07201H279.331L297.635 28.912V1.07201H308.579V46Z"
            fill="var(--white-main)"
          />
          <path
            d="M361.888 1.07201L345.952 46H332.256L316.32 1.07201H327.968L339.104 34.992L350.304 1.07201H361.888Z"
            fill="var(--white-main)"
          />
          <path
            d="M380.606 9.84001V18.928H395.262V27.376H380.606V37.232H397.182V46H369.662V1.07201H397.182V9.84001H380.606Z"
            fill="var(--white-main)"
          />
          <path
            d="M447.679 46H436.735L418.431 18.288V46H407.487V1.07201H418.431L436.735 28.912V1.07201H447.679V46Z"
            fill="var(--white-main)"
          />
          <path
            d="M469.756 1.07201V46H458.812V1.07201H469.756Z"
            fill="var(--white-main)"
          />
          <path
            d="M497.719 1.07201C502.455 1.07201 506.593 2.01067 510.135 3.888C513.676 5.76534 516.407 8.41067 518.327 11.824C520.289 15.1947 521.271 19.0987 521.271 23.536C521.271 27.9307 520.289 31.8347 518.327 35.248C516.407 38.6613 513.655 41.3067 510.071 43.184C506.529 45.0613 502.412 46 497.719 46H480.887V1.07201H497.719ZM497.015 36.528C501.153 36.528 504.375 35.3973 506.679 33.136C508.983 30.8747 510.135 27.6747 510.135 23.536C510.135 19.3973 508.983 16.176 506.679 13.872C504.375 11.568 501.153 10.416 497.015 10.416H491.831V36.528H497.015Z"
            fill="var(--white-main)"
          />
          <path
            d="M551.835 46.448C547.611 46.448 543.728 45.4667 540.187 43.504C536.688 41.5413 533.893 38.8107 531.803 35.312C529.755 31.7707 528.731 27.8027 528.731 23.408C528.731 19.0133 529.755 15.0667 531.803 11.568C533.893 8.06934 536.688 5.33867 540.187 3.37601C543.728 1.41334 547.611 0.432007 551.835 0.432007C556.059 0.432007 559.92 1.41334 563.419 3.37601C566.96 5.33867 569.733 8.06934 571.739 11.568C573.787 15.0667 574.811 19.0133 574.811 23.408C574.811 27.8027 573.787 31.7707 571.739 35.312C569.691 38.8107 566.917 41.5413 563.419 43.504C559.92 45.4667 556.059 46.448 551.835 46.448ZM551.835 36.464C555.419 36.464 558.277 35.2693 560.411 32.88C562.587 30.4907 563.675 27.3333 563.675 23.408C563.675 19.44 562.587 16.2827 560.411 13.936C558.277 11.5467 555.419 10.352 551.835 10.352C548.208 10.352 545.307 11.5253 543.131 13.872C540.997 16.2187 539.931 19.3973 539.931 23.408C539.931 27.376 540.997 30.5547 543.131 32.944C545.307 35.2907 548.208 36.464 551.835 36.464Z"
            fill="var(--white-main)"
          />
          <path
            d="M628.83 38.064H612.062L609.374 46H597.918L614.174 1.07201H626.846L643.102 46H631.518L628.83 38.064ZM626.014 29.616L620.446 13.168L614.942 29.616H626.014Z"
            fill="var(--white-main)"
          />
          <path
            d="M718.892 1.07201V46H707.948V19.056L697.9 46H689.068L678.956 18.992V46H668.012V1.07201H680.94L693.548 32.176L706.028 1.07201H718.892Z"
            fill="var(--white-main)"
          />
          <path
            d="M740.906 1.07201V46H729.962V1.07201H740.906Z"
            fill="var(--white-main)"
          />
          <path
            d="M68.816 107.072C68.816 112.277 67.6213 117.056 65.232 121.408C62.8427 125.675 59.1733 129.131 54.224 131.776C49.2747 134.421 43.1307 135.744 35.792 135.744H22.224V168H0.335999V78.144H35.792C42.96 78.144 49.0187 79.3813 53.968 81.856C58.9173 84.3307 62.6293 87.744 65.104 92.096C67.5787 96.448 68.816 101.44 68.816 107.072ZM34.128 118.336C38.3093 118.336 41.424 117.355 43.472 115.392C45.52 113.429 46.544 110.656 46.544 107.072C46.544 103.488 45.52 100.715 43.472 98.752C41.424 96.7893 38.3093 95.808 34.128 95.808H22.224V118.336H34.128Z"
            fill="var(--white-main)"
          />
          <path
            d="M135.507 168.896C127.059 168.896 119.294 166.933 112.211 163.008C105.214 159.083 99.6243 153.621 95.443 146.624C91.347 139.541 89.299 131.605 89.299 122.816C89.299 114.027 91.347 106.133 95.443 99.136C99.6243 92.1387 105.214 86.6773 112.211 82.752C119.294 78.8267 127.059 76.864 135.507 76.864C143.955 76.864 151.678 78.8267 158.675 82.752C165.758 86.6773 171.304 92.1387 175.315 99.136C179.411 106.133 181.459 114.027 181.459 122.816C181.459 131.605 179.411 139.541 175.315 146.624C171.219 153.621 165.672 159.083 158.675 163.008C151.678 166.933 143.955 168.896 135.507 168.896ZM135.507 148.928C142.675 148.928 148.392 146.539 152.659 141.76C157.011 136.981 159.187 130.667 159.187 122.816C159.187 114.88 157.011 108.565 152.659 103.872C148.392 99.0933 142.675 96.704 135.507 96.704C128.254 96.704 122.451 99.0507 118.099 103.744C113.832 108.437 111.699 114.795 111.699 122.816C111.699 130.752 113.832 137.109 118.099 141.888C122.451 146.581 128.254 148.928 135.507 148.928Z"
            fill="var(--white-main)"
          />
          <path
            d="M252.26 168L233.572 134.08H228.324V168H206.436V78.144H243.172C250.255 78.144 256.271 79.3813 261.22 81.856C266.255 84.3307 270.009 87.744 272.484 92.096C274.959 96.3627 276.196 101.141 276.196 106.432C276.196 112.405 274.489 117.739 271.076 122.432C267.748 127.125 262.799 130.453 256.228 132.416L276.964 168H252.26ZM228.324 118.592H241.892C245.903 118.592 248.889 117.611 250.852 115.648C252.9 113.685 253.924 110.912 253.924 107.328C253.924 103.915 252.9 101.227 250.852 99.264C248.889 97.3013 245.903 96.32 241.892 96.32H228.324V118.592Z"
            fill="var(--white-main)"
          />
          <path
            d="M367.376 78.144V95.68H343.568V168H321.68V95.68H297.872V78.144H367.376Z"
            fill="var(--white-main)"
          />
          <path
            d="M447.097 152.128H413.561L408.185 168H385.273L417.785 78.144H443.129L475.641 168H452.473L447.097 152.128ZM441.465 135.232L430.329 102.336L419.321 135.232H441.465Z"
            fill="var(--white-main)"
          />
          <path
            d="M556.832 78.144V95.68H520.224V114.624H547.616V131.648H520.224V168H498.336V78.144H556.832Z"
            fill="var(--white-main)"
          />
          <path
            d="M623.632 168.896C615.184 168.896 607.419 166.933 600.336 163.008C593.339 159.083 587.749 153.621 583.568 146.624C579.472 139.541 577.424 131.605 577.424 122.816C577.424 114.027 579.472 106.133 583.568 99.136C587.749 92.1387 593.339 86.6773 600.336 82.752C607.419 78.8267 615.184 76.864 623.632 76.864C632.08 76.864 639.803 78.8267 646.8 82.752C653.883 86.6773 659.429 92.1387 663.44 99.136C667.536 106.133 669.584 114.027 669.584 122.816C669.584 131.605 667.536 139.541 663.44 146.624C659.344 153.621 653.797 159.083 646.8 163.008C639.803 166.933 632.08 168.896 623.632 168.896ZM623.632 148.928C630.8 148.928 636.517 146.539 640.784 141.76C645.136 136.981 647.312 130.667 647.312 122.816C647.312 114.88 645.136 108.565 640.784 103.872C636.517 99.0933 630.8 96.704 623.632 96.704C616.379 96.704 610.576 99.0507 606.224 103.744C601.957 108.437 599.824 114.795 599.824 122.816C599.824 130.752 601.957 137.109 606.224 141.888C610.576 146.581 616.379 148.928 623.632 148.928Z"
            fill="var(--white-main)"
          />
          <path
            d="M716.449 151.104H745.121V168H694.561V78.144H716.449V151.104Z"
            fill="var(--white-main)"
          />
          <path
            d="M790.249 78.144V168H768.361V78.144H790.249Z"
            fill="var(--white-main)"
          />
          <path
            d="M861.407 168.896C852.959 168.896 845.194 166.933 838.111 163.008C831.114 159.083 825.524 153.621 821.343 146.624C817.247 139.541 815.199 131.605 815.199 122.816C815.199 114.027 817.247 106.133 821.343 99.136C825.524 92.1387 831.114 86.6773 838.111 82.752C845.194 78.8267 852.959 76.864 861.407 76.864C869.855 76.864 877.578 78.8267 884.575 82.752C891.658 86.6773 897.204 92.1387 901.215 99.136C905.311 106.133 907.359 114.027 907.359 122.816C907.359 131.605 905.311 139.541 901.215 146.624C897.119 153.621 891.572 159.083 884.575 163.008C877.578 166.933 869.855 168.896 861.407 168.896ZM861.407 148.928C868.575 148.928 874.292 146.539 878.559 141.76C882.911 136.981 885.087 130.667 885.087 122.816C885.087 114.88 882.911 108.565 878.559 103.872C874.292 99.0933 868.575 96.704 861.407 96.704C854.154 96.704 848.351 99.0507 843.999 103.744C839.732 108.437 837.599 114.795 837.599 122.816C837.599 130.752 839.732 137.109 843.999 141.888C848.351 146.581 854.154 148.928 861.407 148.928Z"
            fill="var(--white-main)"
          />
        </svg>
      </div>

      <div className={styles.explore}>
        <svg
          width="181"
          height="62"
          viewBox="0 0 181 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M98.6603 47L90 62L81.3398 47L88.5 47V37H91.5V47H98.6603Z"
            fill="var(--white-main)"
          />
          <path
            d="M6.79326 6.24798C8.55326 6.24798 10.0973 6.59198 11.4253 7.27998C12.7693 7.96798 13.8013 8.95198 14.5213 10.232C15.2573 11.496 15.6253 12.968 15.6253 14.648C15.6253 16.328 15.2573 17.8 14.5213 19.064C13.8013 20.312 12.7693 21.28 11.4253 21.968C10.0973 22.656 8.55326 23 6.79326 23H0.937256V6.24798H6.79326ZM6.67326 20.144C8.43326 20.144 9.79326 19.664 10.7533 18.704C11.7133 17.744 12.1933 16.392 12.1933 14.648C12.1933 12.904 11.7133 11.544 10.7533 10.568C9.79326 9.57598 8.43326 9.07998 6.67326 9.07998H4.29726V20.144H6.67326Z"
            fill="var(--white-main)"
          />
          <path
            d="M21.5004 8.95998V13.16H27.1404V15.824H21.5004V20.264H27.8604V23H18.1404V6.22398H27.8604V8.95998H21.5004Z"
            fill="var(--white-main)"
          />
          <path
            d="M36.6978 23.168C35.5298 23.168 34.4738 22.968 33.5298 22.568C32.6018 22.168 31.8658 21.592 31.3218 20.84C30.7778 20.088 30.4978 19.2 30.4818 18.176H34.0818C34.1298 18.864 34.3698 19.408 34.8018 19.808C35.2498 20.208 35.8578 20.408 36.6258 20.408C37.4098 20.408 38.0258 20.224 38.4738 19.856C38.9218 19.472 39.1458 18.976 39.1458 18.368C39.1458 17.872 38.9938 17.464 38.6898 17.144C38.3858 16.824 38.0018 16.576 37.5378 16.4C37.0898 16.208 36.4658 16 35.6658 15.776C34.5778 15.456 33.6898 15.144 33.0018 14.84C32.3298 14.52 31.7458 14.048 31.2498 13.424C30.7698 12.784 30.5298 11.936 30.5298 10.88C30.5298 9.88798 30.7778 9.02398 31.2738 8.28798C31.7698 7.55198 32.4658 6.99198 33.3618 6.60798C34.2578 6.20798 35.2818 6.00798 36.4338 6.00798C38.1618 6.00798 39.5618 6.43198 40.6338 7.27998C41.7218 8.11198 42.3218 9.27998 42.4338 10.784H38.7378C38.7058 10.208 38.4578 9.73598 37.9938 9.36798C37.5458 8.98398 36.9458 8.79198 36.1938 8.79198C35.5378 8.79198 35.0098 8.95998 34.6098 9.29598C34.2258 9.63198 34.0338 10.12 34.0338 10.76C34.0338 11.208 34.1778 11.584 34.4658 11.888C34.7698 12.176 35.1378 12.416 35.5698 12.608C36.0178 12.784 36.6418 12.992 37.4418 13.232C38.5298 13.552 39.4178 13.872 40.1058 14.192C40.7938 14.512 41.3858 14.992 41.8818 15.632C42.3778 16.272 42.6258 17.112 42.6258 18.152C42.6258 19.048 42.3938 19.88 41.9298 20.648C41.4658 21.416 40.7858 22.032 39.8898 22.496C38.9938 22.944 37.9298 23.168 36.6978 23.168Z"
            fill="var(--white-main)"
          />
          <path
            d="M44.7228 14.6C44.7228 12.952 45.0908 11.48 45.8268 10.184C46.5788 8.87198 47.5948 7.85598 48.8748 7.13598C50.1708 6.39998 51.6188 6.03198 53.2188 6.03198C55.0908 6.03198 56.7308 6.51198 58.1388 7.47198C59.5468 8.43198 60.5308 9.75998 61.0908 11.456H57.2268C56.8428 10.656 56.2988 10.056 55.5948 9.65598C54.9068 9.25598 54.1068 9.05598 53.1948 9.05598C52.2188 9.05598 51.3468 9.28798 50.5788 9.75198C49.8268 10.2 49.2348 10.84 48.8028 11.672C48.3868 12.504 48.1788 13.48 48.1788 14.6C48.1788 15.704 48.3868 16.68 48.8028 17.528C49.2348 18.36 49.8268 19.008 50.5788 19.472C51.3468 19.92 52.2188 20.144 53.1948 20.144C54.1068 20.144 54.9068 19.944 55.5948 19.544C56.2988 19.128 56.8428 18.52 57.2268 17.72H61.0908C60.5308 19.432 59.5468 20.768 58.1388 21.728C56.7468 22.672 55.1068 23.144 53.2188 23.144C51.6188 23.144 50.1708 22.784 48.8748 22.064C47.5948 21.328 46.5788 20.312 45.8268 19.016C45.0908 17.72 44.7228 16.248 44.7228 14.6Z"
            fill="var(--white-main)"
          />
          <path
            d="M67.2727 6.24798V16.616C67.2727 17.752 67.5687 18.624 68.1607 19.232C68.7527 19.824 69.5847 20.12 70.6567 20.12C71.7447 20.12 72.5847 19.824 73.1767 19.232C73.7687 18.624 74.0647 17.752 74.0647 16.616V6.24798H77.4487V16.592C77.4487 18.016 77.1367 19.224 76.5127 20.216C75.9047 21.192 75.0807 21.928 74.0407 22.424C73.0167 22.92 71.8727 23.168 70.6087 23.168C69.3607 23.168 68.2247 22.92 67.2007 22.424C66.1927 21.928 65.3927 21.192 64.8007 20.216C64.2087 19.224 63.9127 18.016 63.9127 16.592V6.24798H67.2727Z"
            fill="var(--white-main)"
          />
          <path
            d="M90.1991 14.408C91.1431 14.584 91.9191 15.056 92.5271 15.824C93.1351 16.592 93.4391 17.472 93.4391 18.464C93.4391 19.36 93.2151 20.152 92.7671 20.84C92.3351 21.512 91.7031 22.04 90.8711 22.424C90.0391 22.808 89.0551 23 87.9191 23H80.6951V6.24798H87.6071C88.7431 6.24798 89.7191 6.43198 90.5351 6.79998C91.3671 7.16798 91.9911 7.67998 92.4071 8.33598C92.8391 8.99198 93.0551 9.73598 93.0551 10.568C93.0551 11.544 92.7911 12.36 92.2631 13.016C91.7511 13.672 91.0631 14.136 90.1991 14.408ZM84.0551 13.16H87.1271C87.9271 13.16 88.5431 12.984 88.9751 12.632C89.4071 12.264 89.6231 11.744 89.6231 11.072C89.6231 10.4 89.4071 9.87998 88.9751 9.51198C88.5431 9.14398 87.9271 8.95998 87.1271 8.95998H84.0551V13.16ZM87.4391 20.264C88.2551 20.264 88.8871 20.072 89.3351 19.688C89.7991 19.304 90.0311 18.76 90.0311 18.056C90.0311 17.336 89.7911 16.776 89.3111 16.376C88.8311 15.96 88.1831 15.752 87.3671 15.752H84.0551V20.264H87.4391Z"
            fill="var(--white-main)"
          />
          <path
            d="M104.757 23L101.061 16.472H99.4769V23H96.1169V6.24798H102.405C103.701 6.24798 104.805 6.47998 105.717 6.94398C106.629 7.39198 107.309 8.00798 107.757 8.79198C108.221 9.55998 108.453 10.424 108.453 11.384C108.453 12.488 108.133 13.488 107.493 14.384C106.853 15.264 105.901 15.872 104.637 16.208L108.645 23H104.757ZM99.4769 13.952H102.285C103.197 13.952 103.877 13.736 104.325 13.304C104.773 12.856 104.997 12.24 104.997 11.456C104.997 10.688 104.773 10.096 104.325 9.67998C103.877 9.24798 103.197 9.03198 102.285 9.03198H99.4769V13.952Z"
            fill="var(--white-main)"
          />
          <path
            d="M114.852 8.95998V13.16H120.492V15.824H114.852V20.264H121.212V23H111.492V6.22398H121.212V8.95998H114.852Z"
            fill="var(--white-main)"
          />
          <path
            d="M148.248 6.24798V23H144.888V12.104L140.4 23H137.856L133.344 12.104V23H129.984V6.24798H133.8L139.128 18.704L144.456 6.24798H148.248Z"
            fill="var(--white-main)"
          />
          <path
            d="M161.842 19.808H155.17L154.066 23H150.538L156.562 6.22398H160.474L166.498 23H162.946L161.842 19.808ZM160.93 17.12L158.506 10.112L156.082 17.12H160.93ZM161.122 2.76798L155.602 5.28798V2.88798L161.122 0.0319824V2.76798Z"
            fill="var(--white-main)"
          />
          <path
            d="M174.534 23.168C173.366 23.168 172.31 22.968 171.366 22.568C170.438 22.168 169.702 21.592 169.158 20.84C168.614 20.088 168.334 19.2 168.318 18.176H171.918C171.966 18.864 172.206 19.408 172.638 19.808C173.086 20.208 173.694 20.408 174.462 20.408C175.246 20.408 175.862 20.224 176.31 19.856C176.758 19.472 176.982 18.976 176.982 18.368C176.982 17.872 176.83 17.464 176.526 17.144C176.222 16.824 175.838 16.576 175.374 16.4C174.926 16.208 174.302 16 173.502 15.776C172.414 15.456 171.526 15.144 170.838 14.84C170.166 14.52 169.582 14.048 169.086 13.424C168.606 12.784 168.366 11.936 168.366 10.88C168.366 9.88798 168.614 9.02398 169.11 8.28798C169.606 7.55198 170.302 6.99198 171.198 6.60798C172.094 6.20798 173.118 6.00798 174.27 6.00798C175.998 6.00798 177.398 6.43198 178.47 7.27998C179.558 8.11198 180.158 9.27998 180.27 10.784H176.574C176.542 10.208 176.294 9.73598 175.83 9.36798C175.382 8.98398 174.782 8.79198 174.03 8.79198C173.374 8.79198 172.846 8.95998 172.446 9.29598C172.062 9.63198 171.87 10.12 171.87 10.76C171.87 11.208 172.014 11.584 172.302 11.888C172.606 12.176 172.974 12.416 173.406 12.608C173.854 12.784 174.478 12.992 175.278 13.232C176.366 13.552 177.254 13.872 177.942 14.192C178.63 14.512 179.222 14.992 179.718 15.632C180.214 16.272 180.462 17.112 180.462 18.152C180.462 19.048 180.23 19.88 179.766 20.648C179.302 21.416 178.622 22.032 177.726 22.496C176.83 22.944 175.766 23.168 174.534 23.168Z"
            fill="var(--white-main)"
          />
        </svg>
      </div>
    </div>
  );
}
