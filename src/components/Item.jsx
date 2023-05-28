
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return(
            <div class="card my-3">
                <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
                <img src={item.imagen} class="card-img-top" alt={item.titulo}></img>
                    <div class="card-body">
                        <h5 class="card-title">{item.titulo}</h5>
                        <h5 class="card-title h4">$ {item.precio}</h5>
                        <p class="card-text">{item.descripcion}</p>
                    </div>
                </Link>
            </div>
    )
}
export default Item;