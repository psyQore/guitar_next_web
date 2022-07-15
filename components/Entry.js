import Link from "next/link";
import { formatDate } from "../helpers";

const Entry = ({ entry }) => {
  const { title, resume, image, published_at, id } = entry;
  return (
    <article>
      <div>
        <h1>{title}</h1>
        <p>{formatDate(published_at)}</p>
        <p>{resume}</p>
        <Link href={`/blog/${id}`}>Leer Entrada</Link>
      </div>
    </article>
  );
};

export default Entry;
