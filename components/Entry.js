import Link from "next/link";
import Image from "next/image";
import { formatDate } from "../helpers";

const Entry = ({ entry }) => {
  const { title, resume, image, published_at, id } = entry;
  return (
    <article>
      <Image
        layout="responsive"
        width={800}
        height={600}
        src={image.url}
        alt={`imagen blog ${title}`}
      />
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
