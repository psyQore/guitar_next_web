import Layout from "../components/Layout";
import Entry from "../components/Entry";
import styles from '../styles/Blog.module.css';

const Blog = ({ entries }) => {
  // const url = `${process.env.NEXT_PUBLIC_API_URL}/blogs`;

  return (
    <>
      <Layout page="Blog">
        <main className="contenedor">
          <h2 className="heading">Blog</h2>

          <div className={styles.blog}>
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
  const url = `${process.env.API_URL}/blogs`;

  const response = await fetch(url);
  const entries = await response.json();

  return {
    props: {
      entries,
    },
  };
}
export default Blog;
