import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { consultarBaseDeDatos } from "../../assets/funciones.js"
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const {idProducto} = useParams();

    useEffect( () => {
        consultarBaseDeDatos("../json/productos.json").then(productos => {
            const prod = productos.find(product => product.idProducto === parseInt(idProducto))
            setProducto(prod)
        })
    }, []);

    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail item = {producto} />
        </div>
    );
}

export default ItemDetailContainer;
