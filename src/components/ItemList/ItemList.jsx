import Item from "../Item/Item";

const ItemList = ({productsList}) => {
    console.log(productsList)
    return (
        <>
            {productsList.map(product => <Item key={product.idProducto} producto={product}/>)}
        </>
    );
}

export default ItemList;
