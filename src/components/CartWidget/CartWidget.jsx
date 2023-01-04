import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {

    const {getItemQuantity} = useCartContext()

    return (
        <ul className="navbar-nav me-auto">
            <li className="nav-item">
                <Link className="linkCart" to={'/cart'}>
                    <i className="bi bi-cart3"></i>
                    {getItemQuantity() > 0 && <span className="numeroCarrito">{getItemQuantity()}</span>}
                </Link>
            </li>
        </ul> 
    );
}

export default CartWidget;
