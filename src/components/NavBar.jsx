import { NavLink }  from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="collapse navbar-collapse justify-content-center" >
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link " activeclassname="fw-bold"  aria-current="page" to={"/destacados"}>Destacados</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link " activeclassname="fw-bold" aria-current="page" to={"/category/hombres"}>Hombre</NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link " activeclassname="fw-bold" aria-current="page" to={"/category/mujeres"}>Mujer</NavLink>
            </li>
            
            <li className="nav-item">
                <NavLink className="nav-link " activeclassname="fw-bold" aria-current="page" to={"/category/ninios"}>Niños</NavLink>
            </li>
        </ul>
    </div>
);
}

export default NavBar;