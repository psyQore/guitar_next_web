import { useRouter } from 'next/router'; 


const EntryBlog = () => {
    const router = useRouter();

    console.log(router.query);
  return (
    <div>Desde EntryBlog</div>
  )
}

export default EntryBlog