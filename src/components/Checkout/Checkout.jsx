import React from "react";
import { useNavigate } from "react-router-dom";
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto } from "../../assets/firebase";
import { useCartContext } from "../../context/CartContext";
import { useState, useEffect } from 'react';
import Swal from "sweetalert2";

const Checkout = () => {

    const valoresIniciales = {
        nombreCompleto: "", 
        dni: "",
        email: "",
        repetirEmail: "",
        telefono: "",
        direccion: ""
    }

    const [valores, setValores] = useState(valoresIniciales)
    const [errors, setErrors] = useState({})
    const [enviarFormulario, setEnviarFormulario] = useState(false)
    const {totalPrice, cart, emptyCart} = useCartContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const checkCart = [...cart]
    checkCart.forEach(prodCart =>{
        getProducto(prodCart.id).then(prodBDD =>{
            if(prodBDD.stock < prodCart.cant){
                Swal.fire('No hay más stock, disculpe las molestias', 'warning')
                emptyCart()
                navigate("/")
            }
        })
    })
    useEffect(() => {
        if(Object.keys(errors).length === 0 && enviarFormulario){
            consultarFormulario()
        }
    })

    const handleSubmit = (e) =>{
        e.preventDefault()
        setErrors(validar(valores))   
        setEnviarFormulario(true)
        e.target.reset()
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setValores({...valores, [name]:value})
    }

    const validar = (values) =>{
        const errores = {};
        const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

        if(!values.nombreCompleto){
            errores.nombreCompleto = "*Es necesario ingresar el 'Nombre y Apellido'"
        } else if (!regexName.test(values.nombreCompleto)){
            errores.nombreCompleto = "*Este campo solo acepta letras y espacios en blanco"
        }

        if(!values.dni){
            errores.dni = "*Es necesario ingresar el 'Número de Documento'"
        }

        if(!values.email){
            errores.email = "*Es necesario ingresar el 'Mail'"
        } else if (!regexEmail.test(values.email)){
            errores.email = "*No es un mail válido"
        }

        if(!values.repetirEmail){
            errores.repetirEmail = "*Es necesario 'Repetir el mail'"
        } else if (values.repetirEmail !== values.email){
            errores.repetirEmail = "*Los mails ingresados no coinciden"
        }

        if(!values.telefono){
            errores.telefono = "*Es necesario ingresar el 'Número de teléfono'"
        }

        if(!values.direccion){
            errores.direccion = "*Es necesario ingresar la 'Dirección'"
        }

        return errores
    }

    const consultarFormulario = (e) => {

        const dataForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(dataForm)

        const aux = [...cart]
        aux.forEach(prodCart =>{
            getProducto(prodCart.id).then(prodBDD => {
                if(prodBDD.stock >= prodCart.cant){
                    prodBDD.stock -= prodCart.cant
                    updateProducto(prodCart.id, prodBDD)
                }else{
                    Swal.fire('No hay más stock!', 'warning')
                    emptyCart()
                    navigate("/")
                }
            })
        })

        createOrdenCompra(cliente, totalPrice(), new Date().toISOString()).then(ordenCompra =>{
            getOrdenCompra(ordenCompra.id).then(item => {
                Swal.fire('Gracias por su compra!', `Su número de orden es: ${item.id}`, 'success')
                emptyCart()
                navigate('/')
            }).catch(error => {
                Swal.fire("Lo siento, no pudo se generar su orden de compra", 'error')
                console.error(error)
            })
            
        })
    }

    return (
        <div className="container containerForm">
            <form className="formCheckout" onSubmit={handleSubmit} ref={datosFormulario}>
                <fieldset className="filedsetForm">
                    <div className="mb-3">
                        <input className="inputCheckout" onChange={handleChange} type="text" placeholder="Nombre y Apellido" name="nombreCompleto" value={valores.nombreCompleto}/>
                        <p className="parrafoErrores">{errors.nombreCompleto}</p>
                    </div>
                    <div className="mb-3">
                        <input className="inputCheckout" onChange={handleChange} type="number" placeholder="Número de Documento" name="dni" value={valores.dni}/>
                        <p className="parrafoErrores">{errors.dni}</p>
                    </div>
                    <div className="mb-3">                   
                        <input className="inputCheckout" onChange={handleChange} type="email" placeholder="Mail" name="email" value={valores.email} />
                        <p className="parrafoErrores">{errors.email}</p>
                    </div>
                    <div className="mb-3">                   
                        <input className="inputCheckout" onChange={handleChange} type="email" placeholder="Repetir mail" name="repetirEmail" value={valores.repetirEmail}/>
                        <p className="parrafoErrores">{errors.repetirEmail}</p>
                    </div>
                    <div className="mb-3">              
                        <input className="inputCheckout" onChange={handleChange} type="number" placeholder="Teléfono" name="telefono" value={valores.telefono}/> 
                        <p className="parrafoErrores">{errors.telefono}</p>
                    </div>
                    <div className="mb-3">
                        <input className="inputCheckout" onChange={handleChange} type="text" placeholder="Dirección" name="direccion" value={valores.direccion}/> 
                        <p className="parrafoErrores">{errors.direccion}</p>
                    </div>
                    <button className='btn btn-primary' type="submit">Finalizar compra</button>           
                </fieldset>
            </form>
        </div>
    )
}
        

export default Checkout;
