const EntryBlog = ({ entry }) => {
  return (
    <div>
      <h1>Desde EntryBlog</h1>
    </div>
  );
};

export async function getStaticPaths() {
  const url = "http://localhost:1337/blogs";
  const response = await fetch(url);
  const entries = await response.json();

  const paths = entries.map(entry => ({
    params: { id: entry.id.toString() },
  }));

  // console.log(entries);
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { id } }) {
  const url = `http://localhost:1337/blogs/${id}`;
  const response = await fetch(url);
  const entry = await response.json();

  return {
    props: {
      entry,
    },
  };
}

// export async function getServerSideProps({ query: {id}}){

//     const url = `http://localhost:1337/blogs/${id}`;
//     const response = await fetch(url);
//     const entry = await response.json();

//     return {
//         props: {
//             entry
//         }
//     }
// }

export default EntryBlog;
