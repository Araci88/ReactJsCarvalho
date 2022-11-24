import {useState} from 'react';

const ItemCount = () => {
    const [numero, setNumero] = useState(1);

    const sumar = () => {
        if(numero < 10)
            setNumero(numero+1)
    }
    const restar = () => {
        if(numero > 1)
            setNumero(numero-1)
    }
    return (
        <div className='divBtnItemCount'>
            <button className='btn btn-dark btnRestar' onClick={() => restar()}>-</button>
            <span className='numeroItemCount'>{numero}</span> 
            <button className='btn btn-dark btnSumar' onClick={() => sumar()}>+</button>
            <button className='btn btn-info btnAgregarAlCarrito'>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;
