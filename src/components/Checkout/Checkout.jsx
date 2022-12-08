import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {

    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        e.preventDefault()
        const dataForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(dataForm)
        console.log(cliente)
        e.target.reset()
        navigate('/')
    }

    return (
        <div className="container containerForm">
            <form className="formCheckout" onSubmit={consultarFormulario} ref={datosFormulario}>
                <fieldset className="filedsetForm">
                    <div className="mb-3">
                        <input className="inputCheckout" type="text" placeholder="Nombre y Apellido" name="nombre" />
                    </div>
                    <div className="mb-3">
                        <input className="inputCheckout" type="number" placeholder="Número de Documento" name="numero de documento" />
                    </div>
                    <div className="mb-3">                   
                        <input className="inputCheckout" type="email" placeholder="Mail" name="mail" />
                    </div>
                    <div className="mb-3">              
                        <input className="inputCheckout" type="number" placeholder="Teléfono" name="numero de telefono" /> 
                    </div>
                    <div className="mb-3">
                        <input className="inputCheckout" type="text" placeholder="Dirección" name="direccion"/> 
                    </div>
                    <button className='btn btn-primary' type="submit">Finalizar compra</button>           
                </fieldset>
            </form>
        </div>
    );
}

export default Checkout;
