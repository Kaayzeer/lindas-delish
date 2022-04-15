import React from "react";
import Nav from "../Nav/Nav";
import Head from "next/head";

export default function Layout({ children, text, description, keywords }) {
  return (
    <div>
      <Head>
        <title>{text}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords}></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100&display=swap"
          rel="stylesheet"
        />
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
