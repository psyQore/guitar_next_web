import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <Layout page="Nosotros">
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>

          <div>
            <div className={styles.content}>
              <Image
                layout="responsive"
                width={600}
                height={480}
                src="/img/nosotros.jpg"
                alt="imagen sobre nosotros"
              />
              <div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                  vero, autem accusantium debitis dolorum nobis ipsa
                  exercitationem aliquam fuga, unde aliquid sit enim consequatur
                  quod labore, quas maiores quae. Est ipsam repellendus,
                  recusandae impedit, quibusdam magnam voluptates beatae nisi
                  possimus ipsa velit quisquam aliquid adipisci atque
                  perspiciatis, obcaecati necessitatibus animi?
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                  vero, autem accusantium debitis dolorum nobis ipsa
                  exercitationem aliquam fuga, unde aliquid sit enim consequatur
                  quod labore, quas maiores quae. Est ipsam repellendus,
                  recusandae impedit, quibusdam magnam voluptates beatae nisi
                  possimus ipsa velit quisquam aliquid adipisci atque
                  perspiciatis, obcaecati necessitatibus animi?
                </p>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default About;
