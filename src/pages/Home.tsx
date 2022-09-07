import React from "react";
import Header from "../components/Header/Header";
import styles from "./Home.module.scss";
import badge from "../assets/badge.svg";
import Gallery from "../components/Gallery/Gallery";
import groupImg from "../assets/group-avarts.png";
import banner from "../assets/banner.png";
import artOne from "../assets/galeria-1.png";
import artTwo from "../assets/galeria-2.png";
import artThree from "../assets/galeria-3.png";
import artFour from "../assets/galeria-4.png";
import arrowWhite from "../assets/arrow-white.svg";
import arrowOrange from "../assets/arrow-orange.svg";
import artistOne from "../assets/artista-1.png";
import artistTwo from "../assets/artista-2.png";
import artistThree from "../assets/artista-3.png";
import artistFour from "../assets/artista-4.png";
import artistFive from "../assets/artista-5.png";
import artistSix from "../assets/artista-6.png";
import Footer from "../components/Footer/Footer";

export default function Home() {
  const artists = [
    {
      img: artistOne,
      name: "Mayk Brito",
      photos: "80 Fotografias"
    },
    {
      img: artistTwo,
      name: "Jakeliny G.",
      photos: "99 Fotografias"
    },
    {
      img: artistThree,
      name: "João I. (Biro)",
      photos: "50 Fotografias"
    },
    {
      img: artistFour,
      name: "Tamires Santos",
      photos: "43 Fotografias"
    },
    {
      img: artistFive,
      name: "Ana Silva",
      photos: "28 Fotografias"
    },
    {
      img: artistSix,
      name: "Diego F.",
      photos: "20 Fotografias"
    }
  ];
  return (
    <>
      <main>
        <section className={styles.first__section}>
          <Header />
          <div className={styles.text}>
            <div className={styles.text__container}>
              <p>
                Mercado digital para colecionáveis em criptos e tokens não
                fungível (NFT). Compre, venda e descubra ativos digitais
                exclusivos para você.
              </p>
              <div className={styles.text__container___artists}>
                <div className={styles.text__container___artists___group}>
                  <img src={groupImg} alt="" />
                </div>
                <div>
                  <p>+10</p>
                  <p>Artistas selecionados</p>
                </div>
              </div>
            </div>
            <h1 className={styles.text__title}>
              Descubra a verdadeira arte digital e colecione diversas{" "}
              <span>NFTs</span>
            </h1>
            <img src={badge} alt="Explore a arte" />
          </div>
          <Gallery />
        </section>
      </main>
      <section className={styles.second__section}>
        <aside className={styles.second__section___aside}>
          <div className={styles.second__section___aside___container}>
            <p className={styles.second__section___aside___container___number}>
              10K+
            </p>
            <p className={styles.second__section___aside___container___text}>
              Artes
            </p>
          </div>
          <div className={styles.second__section___aside___container}>
            <p className={styles.second__section___aside___container___number}>
              200+
            </p>
            <p className={styles.second__section___aside___container___text}>
              Vendas
            </p>
          </div>
          <div className={styles.second__section___aside___container}>
            <p className={styles.second__section___aside___container___number}>
              20
            </p>
            <p className={styles.second__section___aside___container___text}>
              Artistas
            </p>
          </div>
        </aside>
        <div className={styles.second__section___banner}>
          <div className={styles.second__section___banner___text}>
            <div className={styles.second__section___banner___text___container}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
                malesuada amet pretium lacus.{" "}
                <span
                  className={
                    styles.second__section___banner___text___container___focus
                  }
                >
                  Id potenti
                </span>{" "}
                diam et cras odio viverra. Amet, velit ut hac sit. Enim
                ultricies mauris mattis nunc semper.
              </p>
              <p
                className={
                  styles.second__section___banner___text___container___name
                }
              >
                Lorem ipsum
              </p>
            </div>
            <div className={styles.second__section___banner___text___container}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
                malesuada amet pretium lacus.{" "}
                <span
                  className={
                    styles.second__section___banner___text___container___focus
                  }
                >
                  Id potenti
                </span>{" "}
                diam et cras odio viverra. Amet, velit ut hac sit. Enim
                ultricies mauris mattis nunc semper.
              </p>
              <p
                className={
                  styles.second__section___banner___text___container___name
                }
              >
                Lorem ipsum
              </p>
            </div>
          </div>
          <img
            src={banner}
            alt=""
            className={styles.second__section___banner___image}
          />
        </div>
      </section>
      <section className={styles.third__section}>
        <h2 className={styles.third__section___title}>
          <span>Populares</span> da semana
        </h2>
        <div className={styles.third__section___container}>
          <div className={styles.third__section___container___list}>
            <div className={styles.third__section___container___list___card}>
              <div
                className={
                  styles.third__section___container___list___card___title
                }
              >
                <p>Astronauta 1</p>
                <img src={arrowWhite} alt="" />
              </div>
              <div
                className={
                  styles.third__section___container___list___card___name
                }
              >
                <p>Mayk Brito</p>
                <span>1.50 RKT</span>
              </div>
              <img src={artOne} alt="" />
            </div>
            <div className={styles.third__section___container___list___card}>
              <div
                className={
                  styles.third__section___container___list___card___title
                }
              >
                <p>Astronauta 3</p>
                <img src={arrowWhite} alt="" />
              </div>
              <div
                className={
                  styles.third__section___container___list___card___name
                }
              >
                <p>João Inácio (Biro)</p>
                <span>3.75 RKT</span>
              </div>
              <img src={artTwo} alt="" />
            </div>
          </div>
          <div className={styles.third__section___container___line}></div>
          <div className={styles.third__section___container___list}>
            <div className={styles.third__section___container___list___card}>
              <div
                className={
                  styles.third__section___container___list___card___title
                }
              >
                <p>Astronauta 1</p>
                <img src={arrowWhite} alt="" />
              </div>
              <div
                className={
                  styles.third__section___container___list___card___name
                }
              >
                <p>Mayk Brito</p>
                <span>1.50 RKT</span>
              </div>
              <img src={artOne} alt="" />
            </div>
            <div className={styles.third__section___container___list___card}>
              <div
                className={
                  styles.third__section___container___list___card___title
                }
              >
                <p>Astronauta 3</p>
                <img src={arrowWhite} alt="" />
              </div>
              <div
                className={
                  styles.third__section___container___list___card___name
                }
              >
                <p>João Inácio (Biro)</p>
                <span>3.75 RKT</span>
              </div>
              <img src={artTwo} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.fourth__section}>
        <h3 className={styles.fourth__section___title}>
          Melhores <span>artistas</span>
        </h3>
        <div className={styles.fourth__section___container}>
          {artists.map((artist, index) => (
            <div key={index} className={styles.fourth__section___container___card}>
              <img src={artist.img} alt="" className={styles.fourth__section___container___card___img} />
              <div>
                <p>{artist.name}</p>
                <span>{artist.photos}</span>
              </div>
            </div>
          ))}
        </div>
        <p className={styles.fourth__section___text}>Ver todos os artistas <img src={arrowOrange} alt="" /></p>
      </section>
      <Footer />
    </>
  );
}
