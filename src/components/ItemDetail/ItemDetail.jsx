import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {
    
    const onAdd = (contador) =>{
        console.log(contador)
    }

    return (
        <div className="row g-0">
            <div className="col md-4">
                <img src={`../img/${item.imgProducto}`} alt="" className="img-fluid rounded-start"/>
            </div>
            <div className="col md-8">
                <h5 className="card-title">{item.nombreProducto}</h5>
                <p className="card-text">Descripción: {item.descripcionProducto}</p>
                <p className="card-text">Precio: $ {new Intl.NumberFormat('de-DE').format(item.precioProducto)}</p>
                <p className="card-text">Stock: {item.stock}</p>
                <ItemCount inicial={1} stock={item.stock} onAdd={onAdd}/>
                <button className="btn btn-primary btnFinalizarCompra">Finalizar compra</button>
            </div>        
        </div>
    );
}

export default ItemDetail;
