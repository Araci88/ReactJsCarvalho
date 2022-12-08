import { Link } from "react-router-dom";
const CartWidget = () => {
    return (
        <ul className="navbar-nav me-auto">
            <li className="nav-item">
                <Link className="linkCart" to="/cart">
                    <i className="bi bi-cart3"></i>
                    <span className="numeroCarrito">0</span>
                </Link>
            </li>
        </ul> 
    );
}

export default CartWidget;
