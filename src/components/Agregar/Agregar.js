import './Agregar.css'
import React from 'react';
import { useState, useEffect } from 'react';

const Agregar = ({products, setProducts}) => {

  const [name, setName] = useState('')
  const [qty, setQty] = useState('')
  const [Price, setPrice] = useState('')
  const [error, setError] = useState(true)
    
    const Datos = {
        name: name,
        qty: qty,
        price: Price
    }
    const agregarProducto =(e)=>{
        e.preventDefault()
        if ( qty < 0 || Price < 0 || name ==='' || qty === '' || Price === '') {
            return setError(true)
        }
        setError(false)
        setProducts([{id: new Date().getTime(), ...Datos}, ...products])
        setName('')
        setQty('')
        setPrice('')
    }

    return (
        <div className='container mt-4'>
            <h2>Agregar producto</h2>

            <form>
                <div className="mb-3">
                    <label className="form-label">Nombre del producto</label>
                    <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Cantidad</label>
                    <input onChange={(e)=>setQty(e.target.value)} value={qty} type="number" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Precio</label>
                    <input onChange={(e)=>setPrice(e.target.value)} value={Price} type="number" className="form-control" />
                </div>
                <button onClick={agregarProducto} type="submit" className="btn btn-success">Agregar</button>
            </form>
            {error ? 
            <div className=''>Los campos estan incompletos o los/el valor es menor a "0"</div> 
            :
            <div className=''>Agregado</div>}
        </div>
    );
}
 
export default Agregar;
