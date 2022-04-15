import React from "react";
import styles from "../../styles/Home.module.css";

export default ({ text }) => {
  return (
    <section className="mWown mx-auto px-2 sm:px-6 lg:px-8 ">
      <div className={styles.sectionbg}>
        <div className={styles.leftColumn}>
          <div className={styles.textWrapper}>
            <h1 className={styles.text}>{text}</h1>
            <p className={styles.para}>
              Hemmagjorda recept med autentisk smak och gjorda med ekologiska
              produkter
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* bg-cover bg-gradient-to-r from-cyan-500 to-blue-500 pacity-20 bg-[url('/bgoverlay-ld.png')] h-128 */
