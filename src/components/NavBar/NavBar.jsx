import { Link } from "react-router-dom";
import Categorias from "./Categorias/Categorias";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid containerNavBar">
                <button className="navbar-brand btn btnRemes"> <Link className="linkRemes" to="/">REMES</Link></button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse">
                    <Categorias/>
                </div>
                <CartWidget/>
            </div>
        </nav>
    );
}

export default NavBar;
