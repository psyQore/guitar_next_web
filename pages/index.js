import Layout from "../components/Layout";
import List from '../components/List';

export default function Home({ guitars }) {
  return (
    <>
      <Layout page="Inicio">
        <main className="contenedor">
          <h1 className="heading">Nueestra Coleección</h1>

          <List guitars={guitars}/>
        </main>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitars?_sort=price:desc`;
  const response = await fetch(url);
  const guitars = await response.json();
  return {
    props: {
      guitars,
    },
  };
}