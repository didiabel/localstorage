import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Agregar from './components/Agregar/Agregar';
import Navbar from './components/Navbar/Navbar';
import Productos from './components/Productos';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  let storage = JSON.parse(localStorage.getItem('products'))
  const [products, setProducts]= useState(storage ? storage : [] )
  

  useEffect( ()=>{
    localStorage.setItem('products',JSON.stringify(products))
  },[products])
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Agregar products={products} setProducts={setProducts} />} />
        <Route path="/productos" element={<Productos products={products} setProducts={setProducts} />} />
      </Routes>
    </Router>
  );
}

export default App;
