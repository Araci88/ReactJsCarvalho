import { useContext, useState, createContext } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    const isInCart = (idProducto) => {
        return cart.find(product => product.idProducto === idProducto)
    }

    const addItem = (product, cantidad) =>{
        if(isInCart(product.idProducto)){
           const indice = cart.findIndex (prod => prod.idProducto === product.idProducto)
           const aux = [...cart]
           aux[indice].cant = cantidad
           setCart(aux)
        } else{
            const newProduct = {
                ...product,
                cant : cantidad
            }
            setCart([...cart, newProduct])
        }
    }

    const emptyCart = () => {
        setCart([])
    }

    const removeItem = (idProducto) => {
        /* const aux = [...cart]
        const indice = aux.findIndex (prod => prod.idProducto === idProducto)
        setCart (aux.splice(indice, 1)) */
        setCart (cart.filter(prod => prod.idProducto !== idProducto))
    }

    const getItemQuantity = () => {
        return cart.reduce((acumulativo, prod) => acumulativo += prod.cant, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acumulativo, prod) => acumulativo += (prod.cant * prod.precioProducto), 0)
    }
    console.log(cart)
    return(
        <CartContext.Provider value={{cart, isInCart, addItem, removeItem, emptyCart, getItemQuantity, totalPrice}}>
            {props.children}
        </CartContext.Provider>
    )
}