import ItemCount from "../ItemCount/ItemCount";
import {Link} from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({item}) => {
    
    const {darkMode} = useDarkModeContext()

    const {addItem} = useCartContext()

    const onAdd = (contador) =>{
        addItem(item, contador)
    }

    return (
        <div className={`row g-0 ${darkMode ? 'text-white bg-secondary' : 'bg-white'}`}>
            <div className="col md-4 imgItemDetail">
                <img src={item.img} alt="" className="img-fluid rounded-start"/>
            </div>
            <div className="col md-8">
                <h5 className="card-title cardTextItemDetail">{item.nombre}</h5>
                <p className="card-text cardTextItemDetail">Descripción: {item.descripcion}</p>
                <p className="card-text cardTextItemDetail">Precio: $ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <p className="card-text cardTextItemDetail">Stock: {item.stock}</p>
                <ItemCount inicial={1} stock={item.stock} onAdd={onAdd}/>
                <button className="btn btn-primary btnFinalizarCompra"> 
                    <Link to="/Cart" className="nav-link">
                        Finalizar compra
                    </Link>
                </button>
            </div>        
        </div>
    );
}

export default ItemDetail;
