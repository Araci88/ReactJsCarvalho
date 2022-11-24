
const CartWidget = () => {
    return (
        <ul className="navbar-nav me-auto">
            <p className="numeroCarrito">0</p>
            <li className="nav-item">
                <button className='btn btn-secondary'><i class="bi bi-cart4"></i></button>
            </li>
        </ul> 
    );
}

export default CartWidget;
