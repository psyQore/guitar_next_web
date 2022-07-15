import Layout from "../components/Layout";

const Blog = ({result}) => {
  console.log(result);
  return (
    <>
      <Layout page="Blog">
        <h1>Desde Blog</h1>
      </Layout>
    </>
  );
};

// Forma de consultar una API de Nextjs
export async function getServerSideProps() {
  
  
  const url = 'http://localhost:1337/blogs'
  const response = await fetch(url)
  const result = await response.json()

    return {
      props: {
        result
      }
    }
  }
export default Blog;
