import Link from "next/link";
import Layout from "../components/Layout";

const About = () => {
  return (
    <>
      <Layout page="Nosotros">
        <h1>Desde Nosotros</h1>
      </Layout>

      <Link href="/">Ir a inicio</Link>
    </>
  );
};

export default About;
