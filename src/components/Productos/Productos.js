import { Link } from 'react-router-dom';
import './Productos.css'

const Agregar = (props) => {
    const {datos, products} = props

    return (
    <>
        <div className='container mt-4'>
            <h2>Productos</h2>

            <Link to="/"><button className="btn btn-success me-3">Agregar +</button></Link>
            <button className="btn btn-danger">Eliminar todo</button>

            <div className='row border-top border-bottom mt-4 p-2'>
                <div className='col-2 fw-bolder'>#</div>
                <div className='col-5 fw-bolder'>Nombre del producto</div>
                <div className='col-2 fw-bolder'>Cantidad</div>
                <div className='col-2 fw-bolder'>Precio</div>
                <div className='col-1 fw-bolder'>Acción</div>
            </div>
        </div>
        {products.length > 0 ?
        products.map(datos =>(
            <div className='row border-top border-bottom mt-4 p-2'>
            <div className='col-2 fw-bolder'>#</div>
            <div className='col-5 fw-bolder'>{datos.name}</div>
            <div className='col-2 fw-bolder'>{datos.qty}</div>
            <div className='col-2 fw-bolder'>{datos.price}</div>
            <div className='col-1 fw-bolder'>Acción</div>
        </div>
        ))
            :
            <p>no hay productos</p>
            }     
        </>
    );
}
 
export default Agregar;