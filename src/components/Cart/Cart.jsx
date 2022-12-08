import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <div className='containerCart'>
            <p className='parrafoCart'>Carrito vacío</p>
            <button className='btn btn-primary btnPagar'>
                <Link className='linkCart1 nav-link' to={'/checkout'}>Ir a pagar</Link>
            </button>   
        </div>
    );
}

export default Cart;
