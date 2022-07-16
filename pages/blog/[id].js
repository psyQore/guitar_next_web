import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import { formatDate } from "../../helpers";
import styles from "../../styles/Entry.module.css";


const EntryBlog = ({ entry }) => {
  const { content, image, published_at, title } = entry;

  return (
    <Layout>
      <main className="contenedor">
        <h1 className="heading">{title}</h1>
        <article className={styles.entry}>
          <Image
            layout="responsive"
            width={800}
            height={600}
            src={image.url}
            alt={`Imaagen entrada ${title}`}
          />
          <div className={styles.content}>
            <p className={styles.date}>{formatDate(published_at)}</p>
            <p className={styles.text}>{content}</p>
          </div>
          <div className={styles.return}>
            <Link href="/blog">⇽ Volver al blog</Link>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs`;
  const response = await fetch(url);
  const entries = await response.json();

  const paths = entries.map((entry) => ({
    params: { id: entry.id.toString() },
  }));

  // console.log(entries);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const url = `${process.env.API_URL}/blogs/${id}`;
  const response = await fetch(url);
  const entry = await response.json();

  return {
    props: {
      entry,
    },
  };
}

// export async function getServerSideProps({ query: {id}}){

//     const url = `${process.env.API_URL}/blogs`;
//     const response = await fetch(url);
//     const entry = await response.json();

//     return {
//         props: {
//             entry
//         }
//     }
// }

export default EntryBlog;
