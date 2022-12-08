import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <div>
            <p>Carrito vacío</p>
            <button className='btn btn-primary'><Link className='linkCart' to={'/checkout'}>Ir a pagar</Link></button>   
        </div>
    );
}

export default Cart;
