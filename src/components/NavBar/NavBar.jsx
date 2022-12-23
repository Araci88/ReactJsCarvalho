import { Link } from "react-router-dom";
import BtnDarkMode from "./BtnDarkMode/BtnDarkMode";
import Categorias from "./Categorias/Categorias";
import CartWidget from "../CartWidget/CartWidget";
import { useDarkModeContext } from '../../context/DarkModeContext';

const NavBar = () => {
    const {darkMode} = useDarkModeContext()

    return (
        <nav className= {`navbar navbar-expand-lg ${darkMode ? 'bg-secondary' : 'bg-white'}`}>
            <div className="container-fluid containerNavBar">
                <button className="navbar-brand btn btnRemes"> <Link className="linkRemes" to="/">REMES</Link></button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Categorias/>
                    <CartWidget/>
                    <BtnDarkMode/>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
