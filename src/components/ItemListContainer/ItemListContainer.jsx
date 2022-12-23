import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {consultarBaseDeDatos} from "../../assets/funciones.js"
import { crearBDD } from "../../assets/firebase.js";
//consulta bases de datos
const ItemListContainer = () => {
    const [productos, setProductos] = useState ([]);
    const {category} = useParams();

    useEffect (() => {
        if(category){
            consultarBaseDeDatos("../json/productos.json").then(productList => {
                const productsList = productList.filter(producto => producto.stock > 0).filter(producto => producto.idCategoria === category)
                const cardProductos = ItemList ({productsList});
                setProductos(cardProductos);
            })
        }else{
            consultarBaseDeDatos("./json/productos.json").then(productList => {
                const productsList = productList.filter(prod => prod.stock > 0)
                const cardProductos = ItemList ({productsList});
                setProductos(cardProductos);
            })
        }
        //crearBDD().then(productos => console.log(productos))
    }, [category]);

    return (
        <div className="row cardProductos">
            {productos}
        </div>
    );
}

export default ItemListContainer;
