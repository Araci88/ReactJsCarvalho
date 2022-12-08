import { Link } from "react-router-dom";
const Categorias = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <button className="nav-link btn"><Link className="nav-link" to="/category/Termos">Termos</Link></button>
            </li>
            <li className="nav-item">
                <button className="nav-link btn"><Link className="nav-link" to="/category/Tazas">Tazas</Link></button>
            </li>
            <li className="nav-item">
                <button className="nav-link btn"><Link className="nav-link" to="/category/Ropa">Ropa</Link></button>
            </li>
        </ul>
    );
}

export default Categorias;
