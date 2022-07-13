import Head from "next/head";

const Layout = ({ children, page }) => {
  return (
    <div>
      <Head>
        <title>GuitarApp - {page}</title>
        <meta name="description" content="Sition Web de Guitarras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Desde Layout</h1>

      {children}
    </div>
  );
};

export default Layout;
