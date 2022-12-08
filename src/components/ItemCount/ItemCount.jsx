import {useState} from 'react';

const ItemCount = ({inicial, stock, onAdd}) => {
    const [contador, setContador] = useState(inicial);

    const agregarAlCarrito = () => onAdd(contador)

    const sumar = () => {
        if(contador < stock)
            setContador(contador+1)
    }
    const restar = () => {
        if(contador > 1)
            setContador(contador-1)
    }
    return (
        <div className='divBtnItemCount'>
            <div className='btnItemCount'>
                <button className='btn btn-secondary btnRestar' onClick={() => restar()}>-</button>
                <span className='numeroItemCount'>{contador}</span> 
                <button className='btn btn-secondary btnSumar' onClick={() => sumar()}>+</button>
            </div>
            <button className='btn btn-primary btnAgregarAlCarrito' onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;
