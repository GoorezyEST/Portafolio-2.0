import React from "react";
import styles from "@/styles/modules/404.module.css";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p>
          Perdón, pero parece que algo sospechoso está ocurriendo.
          <br />
          Tal parece que un &quot;Error 404&quot; ha ocurrido, no tengo la menor
          idea de que sea, pero mejor vamonós.
          <br />
          <br />
          ¿Quieres que te saque de este aprieto?
        </p>
      </div>
      <div className={styles.links}>
        <Link href="./">Si, por favor</Link>
        <Link href="./">Si, gracias</Link>
      </div>
    </div>
  );
}
