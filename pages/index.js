// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card";

export default (/* { events } */) => {
  return (
    <Layout>
      <Banner text="Lindas Delish" />
<<<<<<< HEAD

      <button className="btn-outlined">Lägg till korgen</button>
      <Products />
=======
      <Card /* events={events}  */ />
>>>>>>> 1894b39acac4a97079cde25d82ceb2e2dd93b8c5
    </Layout>
  );
};

/* export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/products?populate=*`);
  const events = await res.json();

  return {
    props: { events: events.data },
    revalidate: 1,
  };
} */
