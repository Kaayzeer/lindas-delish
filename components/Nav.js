/* This example requires Tailwind CSS v2.0+ */
import Link from "next/link";
import Image from "next/image";
import styles from "./nav.module.css";

const navigation = [
  /* { name: "Dashboard", href: "#", current: true }, */
  { name: "Hem", href: "#", current: true },
  { name: "Produkter", href: "#", current: false },
  { name: "Kontakt", href: "#", current: false },
];

/* {navigation.map((item) => (
  <a
    key={item.name}
    href={item.href}
    className={classNames(
      item.current
        ? " text-turq  tracking-wide"
        : "text-black-300 tracking-widest hover:text-turq hover:underline",
      "px-3 py-2 rounded-md text-lg textDefault"
    )}
    aria-current={item.current ? "page" : undefined}
  >
    {item.name}
  </a>
))} */

import React from "react";

export default function Nav() {
  return (
    <header className={styles.container}>
      <nav className={styles.navbar}>
        <h1 className={styles.title}> Lindas Delish</h1>

        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
        <Link href="/about">
          <a className={styles.link}>About</a>
        </Link>
        <Link href="products">
          <a className={styles.link}>Products</a>
        </Link>
      </nav>
    </header>
  );
}
