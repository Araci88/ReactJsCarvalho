import { Link } from "react-router-dom";
const CartWidget = () => {
    return (
        <ul className="navbar-nav me-auto">
            <p className="numeroCarrito">0</p>
            <li className="nav-item">
                <button className='btn btn-secondary'><Link className="linkCart" to="/cart"><i className="bi bi-cart4"></i></Link></button>
            </li>
        </ul> 
    );
}

export default CartWidget;
