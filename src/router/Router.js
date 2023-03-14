import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from '../components/Contato/Contato';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Produto from '../components/Produto/Produto';
import Produtos from '../components/Produtos/Produtos';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <main className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={ <Produtos /> }/>
            <Route path="/produto/:id" element={ <Produto /> }/>
            <Route path="/contato" element={ <Contato /> }/>
          </Routes>
        </div>
        <Footer />
      </main>
    </BrowserRouter>
  )
}

export default AppRoutes;
