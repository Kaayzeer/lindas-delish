import React from "react";
import Nav from "./Nav";
import Head from "next/head";

export default function Layout({ children, text, description, keywords }) {
  return (
    <div>
      <Head>
        <title>{text}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords}></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      {children}
      <footer></footer>
    </div>
  );
}

Layout.defaultProps = {
  title: "Linda´s Delish | E-handel",
  description: "e-handel",
  keywords: "sylt, e-handel, ekologiskt",
};
