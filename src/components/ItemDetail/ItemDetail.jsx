import ItemCount from "../ItemCount/ItemCount";
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
                <img src={item.imgProducto} alt="" className="img-fluid rounded-start"/>
            </div>
            <div className="col md-8">
                <h5 className="card-title cardTextItemDetail">{item.nombreProducto}</h5>
                <p className="card-text cardTextItemDetail">Descripción: {item.descripcionProducto}</p>
                <p className="card-text cardTextItemDetail">Precio: $ {new Intl.NumberFormat('de-DE').format(item.precioProducto)}</p>
                <p className="card-text cardTextItemDetail">Stock: {item.stock}</p>
                <ItemCount inicial={1} stock={item.stock} onAdd={onAdd}/>
                <button className="btn btn-primary btnFinalizarCompra">Finalizar compra</button>
            </div>        
        </div>
    );
}

export default ItemDetail;
