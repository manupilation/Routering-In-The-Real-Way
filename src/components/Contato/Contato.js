import React from 'react';
import styles from "./Contato.module.css";
import foto from "../../img/contato.jpg";
import Head from '../../Head';

const Contato = () => {
  return (
    <div className={styles.contato + " animeLeft"}>
      <Head title="contato" description="Entre em contato." />
      <img src={foto} alt="Máquina de escrever"/>
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>email@email.com</li>
          <li>99999-9999</li>
          <li>Rua ali perto</li>
        </ul>
      </div>
    </div>
  )
}

export default Contato;