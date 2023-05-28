import carro from '../components/images/carrito-de-compras.png';


const CartWidget = () => {
    return (      
            <a className="nav-link fw-bold position-relative me-5" aria-current="page" href="">
                <img src={carro} alt="" width="30" height="24" ></img>
            <span className="badge bg-danger position-absolute top-0 end-0" >2</span>
            </a>
    );
}

export default CartWidget;