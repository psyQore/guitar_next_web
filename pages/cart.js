import Layout from "../components/Layout";
import styles from "../styles/Cart.module.css";

const Cart = ({ cart }) => {

  return (
    <Layout page={"Carrito de Compras"}>
      <h1 className="heading">Carrito</h1>
      <main className={`${styles.content} contenedor`}>
        <div>1</div>
        <div>2</div>
      </main>
    </Layout>
  );
};

export default Cart;
