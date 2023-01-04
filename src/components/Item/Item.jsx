import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";
const Item = ({prod}) => {

    const {darkMode} = useDarkModeContext()

    return (
        <div className={`card cardProducto ${darkMode ? 'text-white bg-secondary' : 'bg-ligth'}`} style={{width: '18rem'}}>
            <img src={prod.img} className="card-img-top cardImg" alt="..." />
            <div className= {`${darkMode ? 'cardBodyDark' : 'card-body'}`}>
                <h5 className="card-title text-center">{prod.nombre}</h5>
                <p className="card-text text-center">$ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                <button className="btn btn-primary btnVerProducto"> 
                    <Link className="linkVerProducto" to={`/product/${prod.id}`}>Ver producto</Link> 
                </button>
            </div>
        </div>
    );
}


export default Item;
