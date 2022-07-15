

const EntryBlog = ({ entry }) => {

    console.log(entry);
  return (
    <div>
        <h1>Desde EntryBlog</h1>
    </div>
  )
}

export async function getServerSideProps({ query: {id}}){

    const url = `http://localhost:1337/blogs/${id}`;
    const response = await fetch(url);
    const entry = await response.json();
  
    return {
        props: {
            entry
        }
    }
}

export default EntryBlog