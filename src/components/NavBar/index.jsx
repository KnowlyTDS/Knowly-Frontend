import { NavLink } from 'react-router-dom'
import './nav.css'
export const NavBar = () => {
    return (
        <nav>
            <h3 className=''>KNOWLY</h3>
            <div className="navlinks">
                <NavLink to="/" className="hover:bg-gray-600 hover:px-2  hover:text-white">Home</NavLink>
                <NavLink to="/about" className="hover:bg-gray-600 hover:px-2  hover:text-white">About</NavLink>
            </div>
        </nav>
    )
}
