import Head from "next/head";
import Header from "../components/Header";

const Layout = ({ children, page }) => {
  return (
    <div>
      <Head>
        <title>GuitarApp - {page}</title>
        <meta name="description" content="Sition Web de Guitarras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      {children}
    </div>
  );
};

export default Layout;
