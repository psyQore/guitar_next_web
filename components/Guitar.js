import Image from "next/image";
import Link from "next/link";

const Guitar = ({ guitar }) => {
  const { name, price, image, description, url } = guitar;
  console.log(image);

  return (
    <div>
      <Image
        layout="responsive"
        width={500}
        height={350}
        src={image[0].url}
        alt={`Imagen Guitarra ${name}`}
      />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{price}</p>
        <Link href={`/guitars/${url}`}>Ver Guitarra</Link>
      </div>
    </div>
  );
};

export default Guitar;
