import { Link } from "react-router-dom";
const Item = ({producto}) => {
    return (
        <div className="card cardProducto" style={{width: '18rem'}}>
            <img src={`../img/${producto.imgProducto}`} className="card-img-top cardImg" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center">{producto.nombreProducto}</h5>
                <p className="card-text text-center">$ {new Intl.NumberFormat('de-DE').format(producto.precioProducto)}</p>
                <button className="btn btn-primary btnVerProducto"> 
                    <Link className="linkVerProducto" to={`/product/${producto.idProducto}`}>Ver producto</Link> 
                </button>
            </div>
        </div>
    );
}

export default Item;
