import './Agregar.css'
import React from 'react';

const Agregar = (props) => {
    const {setName, setQty, setPrice, Datos} = props
    

    
    return (
        <div className='container mt-4'>
            <h2>Agregar producto</h2>

            <form>
                <div className="mb-3">
                    <label className="form-label">Nombre del producto</label>
                    <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Cantidad</label>
                    <input onChange={(e)=>setQty(e.target.value)} type="number" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Precio</label>
                    <input onChange={(e)=>setPrice(e.target.value)} type="number" className="form-control" />
                </div>
                <button onClick={Datos} type="submit" className="btn btn-success">Guardar</button>
            </form>
        </div>
    );
}
 
export default Agregar;