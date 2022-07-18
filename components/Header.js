import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";

const Header = ({ guitar }) => {
  console.log(guitar);
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
          <div>
            <h1>Modelo {guitar.name}</h1>
            <p>{guitar.description}</p>
            <p>${guitar.price}</p>
            <Link href={`/guitars/${guitar.url}`}>
              <a>Ver Producto</a>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
