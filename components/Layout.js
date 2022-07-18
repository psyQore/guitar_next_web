import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children, page, guitar }) => {
  return (
    <div>
      <Head>
        <title>{`GuitarApp - ${page}`}</title>
        <meta name="description" content="Sition Web de Guitarras" />
      </Head>
      <Header guitar={guitar} />
      {children}
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  guitar: null,
};
export default Layout;
