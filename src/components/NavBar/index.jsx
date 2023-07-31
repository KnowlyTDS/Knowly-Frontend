import { NavLink, useNavigate } from 'react-router-dom'
import { AuthConsumer } from '@/auth';
import './nav.css'

export const NavBar = () => {
    let navigate = useNavigate();
    const [{ auth }, dispatch] = AuthConsumer();
    let activeClass = 'text-red-700';

    const logout = () => {
        if(window.confirm('Are you sure you want to logout?')){
            dispatch({ type: 'LOGOUT' })
            navigate('/login')
        } else {
            return;
        }

    }

    return (
        <nav>
            <NavLink to='/' className=''>KNOWLY</NavLink>
            <div className="navlinks">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive && activeClass}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive && activeClass}
                >
                    About
                </NavLink>
                {
                    auth ? <button
                        to="/login"
                        onClick={logout}
                        className={({ isActive }) => isActive && activeClass }
                    >
                        Logout
                    </button>
                        : <>
                            <NavLink
                                to="/login"
                                className={({ isActive }) => isActive && activeClass}
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/register"
                                className={({ isActive }) => isActive && activeClass}
                            >
                                Register
                            </NavLink>
                        </>
                }

            </div>
        </nav>
    )
}
