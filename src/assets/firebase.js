import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDocs, getDoc, updateDoc, deleteDoc, collection, doc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "remes-articulos-sublimables.firebaseapp.com",
  projectId: "remes-articulos-sublimables",
  storageBucket: "remes-articulos-sublimables.appspot.com",
  messagingSenderId: "769662419270",
  appId: "1:769662419270:web:947464c8ab364acf69a547"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

const crearBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"), {
            nombre: prod.nombreProducto,
            descripcion: prod.descripcionProducto,
            precio: prod.precioProducto,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            img: prod.imgProducto
        })
    })
}

const getProductos = async () => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map (prod => {
        return {...prod.data(), id: prod.id}
    })
    return items
}

const getProducto = async (id) =>{
    const producto = await getDoc(doc(db, "productos", id))
    const item = {...producto.data(), id: producto.id }
    return item
}

const updateProducto = async (id, infoNueva) =>{
    const estado = await updateDoc(doc(db, "productos", id), infoNueva)
    return estado;
}

const deleteProducto = async (id) =>{
    const estado = deleteDoc(doc(db, "productos", id));
    return estado;
}

const createOrdenCompra = async (cliente, preTotal, fecha) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
        nombreCompleto: cliente.nombreCompleto,
        email: cliente.email,
        repetirEmail: cliente.repetirEmail,
        dni: cliente.dni,
        direccion: cliente.direccion,
        telefono: cliente.telefono,
        fecha: fecha,
        precioTotal: preTotal
    })
    return ordenCompra
}

const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    const item = {...ordenCompra.data(), id: ordenCompra.id}
    return item
}

export { crearBDD, getProductos, getProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra }