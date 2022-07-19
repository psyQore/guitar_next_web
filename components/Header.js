import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";

const Header = ({ guitar }) => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.bar}>
          <Link href="/">
            <a>
              <Image width={400} height={100} src="/img/logo.svg" alt="logo" />
            </a>
          </Link>
          <nav className={styles.navegation}>
            <Link href="/">Inicio</Link>
            <Link href="/about">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/store">Store</Link>
          </nav>
        </div>
        {guitar && (
          <div className={styles.model}>
            <h2>Modelo {guitar.name}</h2>
            <p>{guitar.description}</p>
            <p className={styles.price}>${guitar.price}</p>
            <Link href={`/guitars/${guitar.url}`}>
              <a className={styles.button}>Ver Producto</a>
            </Link>
          </div>
        )}
      </div>

      {router.pathname === "/" && (
        <img className={styles.guitar} src="/img/header_guitarra.png" alt="imagen header" />
      )}
    </header>
  );
};

export default Header;
