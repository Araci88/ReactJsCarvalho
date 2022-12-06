//consulta de forma asincriona el archivo json y retorna los valores

const consultarBaseDeDatos = async (ruta) => {
    const response = await fetch(ruta)
    const productos = await response.json() //cuando termines la consulta asincrona, vas a tener un objeto promesa
    return productos
}

export {consultarBaseDeDatos}