import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "../../styles/Guitar.module.css";

const Product = ({ guitar }) => {
  const { name, price, image, description, url } = guitar[0];

  return (
    <Layout page={`Guitarra ${name}`}>
      <div className={styles.guitar}>
        <Image
          layout="responsive"
          width={180}
          height={350}
          src={image[0].url}
          alt={`Imagen Guitarra ${name}`}
        />
        <div className={styles.content}>
          <h3>{name}</h3>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>${price}</p>
        </div>
      </div>
    </Layout>
  );
};

// Consulta a la api que treae las guitarras
export async function getServerSideProps({ query: { url } }) {
  const urlGuitar = `${process.env.API_URL}/guitars?url=${url}`;
  const response = await fetch(urlGuitar);
  const guitar = await response.json();

  console.log(guitar);

  return {
    props: {
      guitar,
    },
  };
}
export default Product;
