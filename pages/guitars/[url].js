import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import styles from "../../styles/Guitar.module.css";

const Product = ({ guitar, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const { name, price, image, description, url, id } = guitar[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (quantity < 1) {
      alert("Cantidad no válida");
    }

    // Agregarlo al carrito
    const guitarSelect = {
      id,
      image: image[0].url,
      name,
      price,
      quantity,
    };

    addToCart(guitarSelect);
  };

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

          <form className={styles.form} onSubmit={handleSubmit}>
            <label>Cantidad:</label>
            <select
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            >
              <option>-- Seleccione --</option>
              <option value="1"> 1 </option>
              <option value="2"> 2 </option>
              <option value="3"> 3 </option>
              <option value="4"> 4 </option>
              <option value="5"> 5 </option>
              <option value="6"> 6 </option>
              <option value="7"> 7 </option>
              <option value="8"> 8 </option>
              <option value="9"> 9 </option>
              <option value="10"> 10 </option>
            </select>
            <input type="submit" value="Agregar al Carrito" />
          </form>
          <div className={styles.return}>
            <Link href="/store">⇽ Volver</Link>
          </div>
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

  return {
    props: {
      guitar,
    },
  };
}
export default Product;
