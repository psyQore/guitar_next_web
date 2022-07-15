import Layout from "../components/Layout";
import Entry from "../components/Entry";

const Blog = ({ entries }) => {
  return (
    <>
      <Layout page="Blog">
        <main className="contenedor">
          <h2 className="heading">Blog</h2>

          <div>
            {entries.map((entry) => (
              <Entry key={entry.id} entry={entry} />
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
};

// Forma de consultar una API de Nextjs
export async function getServerSideProps() {
  const url = "http://localhost:1337/blogs";
  const response = await fetch(url);
  const entries = await response.json();

  return {
    props: {
      entries,
    },
  };
}
export default Blog;
