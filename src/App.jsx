import React from 'react';
import NavBar from './components/NavBar';
import ListaDeProductos from './components/ListaProductos';
import Products from './components/Products';
import './App.css';
import ProductsContainer from './components/ProductsContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ProductsContainer />
    </div>
  );
}

export default App;
