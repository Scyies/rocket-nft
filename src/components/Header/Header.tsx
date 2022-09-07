import React from "react";
import styles from "./Header.module.scss";
import metaMaskLogo from "../../assets/logo_MetaMask.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.header__logo}>
        Rocket <span className={styles.header__logo___nft}>NFTs</span>
      </p>
      <nav className={styles.nav}>
        <li>Comprar NFT</li>
        <li>Sobre</li>
        <li>FAQ</li>
      </nav>
      <button className={styles.button}>
        <img src={metaMaskLogo} alt="Logo metamaks" />
        Conectar carteira
      </button>
    </header>
  );
}
