const EntryBlog = ({ entry }) => {
  return (
    <div>
      <h1>Desde EntryBlog</h1>
    </div>
  );
};

export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs`;
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
