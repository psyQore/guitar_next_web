import Layout from "../components/Layout";
import List from "../components/List";
import Course from '../components/Course';

export default function Home({ guitars, course }) {
  return (
    <>
      <Layout page="Inicio">
        <main className="contenedor">
          <h1 className="heading">Nueestra Coleección</h1>

          <List guitars={guitars} />
        </main>

        <Course
          course={course}
        />

      </Layout>
    </>
  );
}

// Consulta a la API doble
export async function getServerSideProps() {
  const urlGuitars = `${process.env.API_URL}/guitars?_sort=price:desc`;
  const urlCourses = `${process.env.API_URL}/courses`;

  const [resGuitars, resCourse] = await Promise.all([
    fetch(urlGuitars),
    fetch(urlCourses),
  ]);

  const [guitars, course] = await Promise.all([
    resGuitars.json(),
    resCourse.json(),
  ]);

  return {
    props: {
      guitars,
      course,
    },
  };
}
