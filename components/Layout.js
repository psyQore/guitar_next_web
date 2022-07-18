import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children, page }) => {
  return (
    <div>
      <Head>
        <title>{`GuitarApp - ${page}`}</title>
        <meta name="description" content="Sition Web de Guitarras" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
