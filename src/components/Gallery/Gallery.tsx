import React from "react";
import imageOne from "../../assets/galeria-1.png";
import imageTwo from "../../assets/galeria-2.png";
import imageThree from "../../assets/galeria-3.png";
import imageFour from "../../assets/galeria-4.png";
import imageFive from "../../assets/galeria-5.png";
import imageSix from "../../assets/galeria-6.png";
import imageSeven from "../../assets/galeria-7.png";
import imageEight from "../../assets/galeria-8.png";
import styles from "./Gallery.module.scss";

export default function Gallery() {
  const images = [
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    imageFive,
    imageSix,
    imageSeven,
    imageEight,
  ];
  return (
    <section className={styles.gallery}>
      {images.map((image) => (
        <img src={image} className={styles.gallery__img} />
      ))}
    </section>
  );
}
