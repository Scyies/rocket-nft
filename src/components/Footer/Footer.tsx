import React from "react";
import styles from "./Footer.module.scss";
import arrowBlack from "../../assets/arrow-black.svg";
import insta from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";
import twitter from "../../assets/twitter.svg";
import email from "../../assets/email.svg";

export default function Footer() {
  const socials = [insta, youtube, twitter, email]
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__title}>
        <h4>
          Rocket <span>NFTs</span>
        </h4>
        <div>
          <img src={arrowBlack} alt="" />
        </div>
      </div>
      <div className={styles.footer__text}>
        <div className={styles.footer__text___news}>
          <p>Fique por dentro de <span>todas as novidades</span></p>
          <div className={styles.footer__text___news___input}>
            <input type="email" placeholder="nft@rocketseat.com.br" />
            <button>Enviar</button>
          </div>
        </div>
        <div className={styles.footer__text___links}>
          <ul>
            <li>Empresa</li>
            <li>Sobre</li>
            <li>Serviços</li>
            <li>Time</li>
            <li>Carreira</li>
          </ul>
          <ul>
            <li>Mapa</li>
            <li>Galeria</li>
            <li>Populares</li>
            <li>Vendas</li>
            <li>Contato</li>
          </ul>
          <ul>
            <li>Links</li>
            <li>FAQs</li>
            <li>Termos</li>
            <li>Política</li>
            <li>Ajuda</li>
          </ul>
        </div>
      </div>
      <div className={styles.footer__email}>
        <p>www.rocketseat.com.br</p>
        <div>
          {socials.map((social, index) => (<img key={index} src={social}/>))}
        </div>
      </div>
    </footer>
  );
}
