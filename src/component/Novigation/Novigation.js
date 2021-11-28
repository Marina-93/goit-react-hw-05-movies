import { NavLink } from 'react-router-dom';
import './Novigation.css'

export default function Novigation() {
    return(
    <nav className="line">
        <NavLink className={(data)=>data.isActive?"nav activ": "nav"} to="/"  >Home</NavLink>
        <NavLink className={(data)=>data.isActive?"nav activ": "nav"} to="/movies">Move</NavLink>
    </nav>
    )
}