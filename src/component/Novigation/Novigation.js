import { NavLink } from 'react-router-dom';

export default function Novigation() {
    return(
    <nav>
        <NavLink to="/"  >Home</NavLink>
        <NavLink to="/movies">Move</NavLink>
    </nav>
    )
}