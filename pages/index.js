import Layout from "../components/Layout";
import List from "../components/List";
import Course from "../components/Course";
import ListBlog from "../components/ListBlog";

export default function Home({ guitars, course, entries }) {
  console.log(guitars);
  return (
    <>
      <Layout page="Inicio" guitar={guitars[4]}>
        <main className="contenedor">
          <h1 className="heading">Nueestra Coleección</h1>
          <List guitars={guitars} />
        </main>
        <Course course={course} />
        <section className="contenedor">
          <ListBlog entries={entries} />
        </section>
      </Layout>
    </>
  );
}

// Consulta a la API doble
export async function getServerSideProps() {
  const urlGuitars = `${process.env.API_URL}/guitars?_sort=price:desc`;
  const urlCourses = `${process.env.API_URL}/courses`;
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=createdAt:desc`;

  const [resGuitars, resCourse, resBlog] = await Promise.all([
    fetch(urlGuitars),
    fetch(urlCourses),
    fetch(urlBlog),
  ]);

  const [guitars, course, entries] = await Promise.all([
    resGuitars.json(),
    resCourse.json(),
    resBlog.json(),
  ]);

  return {
    props: {
      guitars,
      course,
      entries,
    },
  };
}
