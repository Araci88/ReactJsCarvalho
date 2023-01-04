import { Link } from 'react-router-dom';
import { useDarkModeContext } from '../../context/DarkModeContext';
import { useCartContext } from '../../context/CartContext';

const Cart = () => {

    const {darkMode} = useDarkModeContext()

    const {cart, emptyCart, totalPrice, removeItem} = useCartContext()

    return (
        <>
            {cart.length === 0 ?
                <div className='containerCart'>
                    <p className={`${darkMode ? 'text-white parrafoCart' : 'parrafoCart'}`}>Carrito vacío</p>
                    <button className='btn btn-primary btnPagar'>
                        <Link className='linkCart1 nav-link' to={'/'}>Continuar Compra</Link>
                    </button>   
                </div> 

                :

                <div className='container containerCartFull'>
                    <div className='text-center'>
                        {
                            cart.map(prod => 
                            <div className='card containerCardCart' key={prod.id} style={{maxWidth: '100%'}}>
                                <div className='row g-0'>
                                    <div className='col-md-4'>
                                        <img src={prod.img} alt="" className='img-fluid rounded-start imgCardCart' style={{maxWidth: '30%'}}/>
                                    </div>
                                    <div className='col-md-8'>
                                        <div className='card-body'>
                                            <h5 className='card-title'> {`${prod.nombre}`} </h5>
                                            <p className='card-text'>Cantidad: {prod.cant} </p>
                                            <p className='card-text'>Precio por unidad: $ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                                            <p className='card-text'>Total: $ {new Intl.NumberFormat('de-DE').format(prod.precio * prod.cant)} </p>
                                            <button className='btn btn-danger' onClick={() => removeItem(prod.id)}>Eliminar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                            )
                        }
                    </div>
                    <div className='btnCart'>
                        <p className={`${darkMode ? 'text-white parrafoCart' : 'parrafoCart'}`}>Total de Compra: $ {new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
                        <button className='btn btn-danger' onClick={emptyCart}>Vaciar Carrito</button>
                        <button className='btn btn-primary btnPagar'>
                            <Link className='linkCart1 nav-link' to={'/'}>Continuar Compra</Link>
                        </button> 
                        <button className='btn btn-primary btnPagar'>
                            <Link className='linkCart1 nav-link' to={'/checkout'}>Ir a pagar</Link>
                        </button>  
                    </div>
                </div> 
        
        }

        
        </>

    );
}

export default Cart;
