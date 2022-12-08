import { Link } from "react-router-dom";
const CartWidget = () => {
    return (
        <ul className="navbar-nav me-auto">
            <li className="nav-item">
                <button className='btn btn-secondary'><Link className="linkCart" to="/cart"><i className="bi bi-cart4"></i><span className="numeroCarrito">0</span></Link></button>
            </li>
        </ul> 
    );
}

export default CartWidget;
