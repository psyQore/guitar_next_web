import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";


const Header = () => {
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <Link href="/"> 
          <Image width={400} height={100} src="/img/logo.svg" alt="logo"/>
        </Link>
        <nav className={styles.navegacion}>
          <Link href="/">Inicio</Link>
          <Link href="/about">Nosotros</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/store">Store</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
