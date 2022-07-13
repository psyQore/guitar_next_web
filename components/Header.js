import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="contenedor">
        <div></div>
        <nav>
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
