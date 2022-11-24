const Form = () => {
    return (
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
            <button className="btn btn-secondary" type="submit">Buscar</button>
        </form>
    );
}

export default Form;
