import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children, page }) => {
  return (
    <div>
      <Head>
        <title>{`GuitarApp - ${page}`}</title>
        <meta name="description" content="Sition Web de Guitarras" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
