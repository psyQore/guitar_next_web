import Layout from "../components/Layout";
import ListBlog from '../components/ListBlog';

const Blog = ({ entries }) => {
  // const url = `${process.env.NEXT_PUBLIC_API_URL}/blogs`;

  return (
    <>
      <Layout page="Blog">
        <main className="contenedor">
          <ListBlog entries={entries} />
        </main>
      </Layout>
    </>
  );
};

// Forma de consultar una API de Nextjs
export async function getStaticProps() {
  const url = `${process.env.API_URL}/blogs?_sort=createdAt:desc`;

  const response = await fetch(url);
  const entries = await response.json();

  return {
    props: {
      entries,
    },
  };
}
export default Blog;
