import { Link } from "react-router-dom";
const Categorias = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <button className="nav-link btn"><Link className="nav-link" to="/category/1">Termos</Link></button>
            </li>
            <li className="nav-item">
                <button className="nav-link btn"><Link className="nav-link" to="/category/2">Tazas</Link></button>
            </li>
            <li className="nav-item">
                <button className="nav-link btn"><Link className="nav-link" to="/category/3">Ropa</Link></button>
            </li>
        </ul>
    );
}

export default Categorias;
