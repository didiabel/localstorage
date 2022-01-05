import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Agregar from './components/Agregar/Agregar';
import Navbar from './components/Navbar/Navbar';
import Productos from './components/Productos';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  // const [products, setProducts]= useState([])
  let products = JSON.parse(localStorage.getItem('productos'))
  const [name, setName] = useState('')
  const [qty, setQty] = useState('')
  const [Price, setPrice] = useState('')

const Datos =(e)=>{
  e.preventDefault()
  const Datos = {
      name: name,
      qty: qty,
      price: Price
  }
  
  if (products !== null) {
    
    products.push(Datos)
    localStorage.setItem('productos', JSON.stringify(products))
  }
    else{
      products = []
      products.push(Datos)
      localStorage.setItem('productos', JSON.stringify(products))
    }
  }
//   products !== null ? 
  
//   products.push(Datos)
//   localStorage.setItem('productos', JSON.stringify(products))

//   :

//   products = []
//   products.push(Datos)
//   localStorage.setItem('productos', JSON.stringify(products))
// }


// useEffect( ()=>{
//   products = JSON.parse(localStorage.getItem('productos'))
//   console.log(products);
// },[])
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Agregar setName={setName} setQty={setQty} setPrice={setPrice} Datos={Datos}/>} />
        <Route path="/productos" element={<Productos Datos={Datos} products={products} />} />
      </Routes>
    </Router>
  );
}

export default App;
