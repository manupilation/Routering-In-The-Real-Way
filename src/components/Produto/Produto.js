import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Head from '../../Head';
import style from "./Produto.module.css";

const Produto = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchErr, setFetchError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      let request;
      setLoading(true);
      try {
        request = await (await fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`)).json();
      } catch(err) {
        request = null;
        setFetchError("Ocorreu um erro!")
      } finally {
        setProduct(request);
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if(loading) return <div className='loading'></div>
  if(fetchErr) return <p>{fetchErr}</p>
  if(product === null) return null;

  return (
    <div className={style.produto + " animeLeft"}>
      <Head title={product.nome} descricao={`Produto Ranek: ${product.nome}`}/>
  
      <div>
        {product.fotos.map((foto) => <img key={foto.src} src={foto.src} alt={foto.titulo}/>)}
      </div>

      <div>
        <h1>{product.nome}</h1>
        <span className={style.preco}>R$ {product.preco}</span>
        <p className={style.descricao}>{product.descricao}</p>
      </div>
    </div>
  )
}

export default Produto;