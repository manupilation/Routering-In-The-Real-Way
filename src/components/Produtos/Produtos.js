import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Head from '../../Head';
import styles from './Produtos.module.css';

const Produtos = () => {
  const [produtos, setProdutos] = useState(null)

  useEffect(() => {
    async function fetchApi() {
      let response;
      try {
        response = await (await (await fetch("https://ranekapi.origamid.dev/json/api/produto")).json());
      } catch(err) {
        console.error(err);
        response = null;
      } finally {
        setProdutos(response);
      }

    }
    fetchApi();
  }, []);

  if(produtos === null) return null;

  return (
    <section className={styles.produtos + " animeLeft"}>
      <Head title="Produtos" description="Compre nossos produtos issor." />
      {
        produtos.map((produto, i) => (
          <Link to={`/produto/${produto.id}`} key={i}>
            <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo}/>
            <h1 className={styles.nome}>{produto.nome}</h1>
          </Link>
        ))
      }
    </section>
  )
}

export default Produtos