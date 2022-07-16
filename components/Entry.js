import Link from "next/link";
import Image from "next/image";
import { formatDate } from "../helpers";
import styles from "../styles/Entry.module.css";


const Entry = ({ entry }) => {
  const { title, resume, image, published_at, id, url } = entry;
  return (
    <article>
      <Image
        as="preload"
        priority="true"
        layout="responsive"
        width={800}
        height={600}
        src={image.url}
        alt={`imagen blog ${title}`}
      />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.date}>{formatDate(published_at)}</p>
        <p className={styles.resume}>{resume}</p>
        <Link href={`/blog/${url}`}>
          <a className={styles.button}>Leer Entrada</a>
        </Link>
      </div>
    </article>
  );
};

export default Entry;
