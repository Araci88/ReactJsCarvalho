import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getProductos, } from "../../assets/firebase.js";
//consulta bases de datos
const ItemListContainer = () => {
    const [productos, setProductos] = useState ([]);
    const {category} = useParams();

    useEffect (() => {
        if(category){
            getProductos().then(products => {
                const productsList = products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(category))
                const cardProductos = ItemList ({productsList});
                setProductos(cardProductos);
            })
        }else{
            getProductos().then(products => {
                const productsList = products.filter(prod => prod.stock > 0)
                const cardProductos = ItemList ({productsList});
                setProductos(cardProductos);
            })
        }

    }, [category]);

    return (
        <div className="row cardProductos">
            {productos}
        </div>
    );
}


export default ItemListContainer;
