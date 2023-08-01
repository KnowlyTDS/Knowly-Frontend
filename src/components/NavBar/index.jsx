import { NavLink, useNavigate } from 'react-router-dom'
import { AuthConsumer, ACTIONS } from '@/auth';
import './nav.css'
import { useState } from 'react';



export const NavBar = () => {

    const mainColor = 'red-700';

    let navigate = useNavigate();
    const [{ auth }, dispatch] = AuthConsumer();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMobileNav = () => {
        setIsOpen(!isOpen);
    };

    const links = [{
        href: '/dashboard',
        text: 'Dashboard',
    }, {
        href: '/home',
        text: 'Home',
    }, {
        href: '/about',
        text: 'About',
    }];


    const NavAnchor = ({ to, children, className, onClick, type }) => {
        const [active, setActive] = useState(false);

        return (
            <NavLink
                to={to}
                id={type}
                className={`
                ${active && `border-b-2 border-${mainColor} pb-2`} 
                ${className} 
                ${type === 'sesion' && 'px-3 py-1 rounded-md text-white hover:bg-red-800'}
                `}
                style={({ isActive }) => setActive(isActive)}
                onClick={onClick}
            >
                {children}
            </NavLink>
        )
    };

    const BtnSesion = ({ children, className, type }) => {

        const handleSesion = () => {
            setIsOpen(false)
            if (type === 'login') return navigate('/login');
            if (!confirm('Are you sure you want to logout?')) return

            dispatch({ type: ACTIONS.LOGOUT })
            navigate('/login')

        };

        return (
            <button
                className={`px-3 py-1 rounded-md ${className}`}
                onClick={handleSesion}
            >
                {children}
            </button>
        )
    }

    const AuthButtons = ({ onClick, type = 'desktop' }) => {
        let tailwindClass;

        type === 'mobile'
            ? tailwindClass = `text-${mainColor} bg-white hover:bg-red-600 hover:text-white `
            : tailwindClass = `text-white bg-${mainColor} hover:bg-red-600`

        if (!auth) return <li>
            <BtnSesion
                type='login'
                onClick={onClick}
                className={tailwindClass}
            >
                Login
            </BtnSesion>
        </li>

        return <li>
            <BtnSesion
                type='logout'
                onClick={onClick}
                className={tailwindClass}
            >
                Logout
            </BtnSesion>
        </li>
    }

    return (
        <>
            <header className="header my-5">
                {/* container */}
                <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                    {/* header wrapper */}
                    <div className="header-wrapper flex items-center justify-between">
                        {/* header logo */}
                        <div className="header-logo">
                            <h1 className="font-semibold text-black leading-relaxed">
                                <NavLink to="/">KNOWLY</NavLink>
                            </h1>
                        </div>

                        {/* mobile toggle */}
                        <div className="toggle md:hidden">
                            <button
                                onClick={toggleMobileNav}
                                onKeyDown={(e) => {
                                    e.key === 'Escape' && setIsOpen(false)
                                    // console.log(e.key)
                                }}
                            >
                                <svg
                                    className={`h-6 w-6 fill-current text-${mainColor} `}
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>

                        {/* Navbar */}
                        <nav className={`navbar hidden md:block ${isOpen ? 'block' : 'hidden'}`}>
                            <ul className="flex space-x-3 items-center text-sm font-semibold">
                                {
                                    links.map(({ href, text }) => <li key={text}>
                                        <NavAnchor to={href}>
                                            {text}
                                        </NavAnchor>
                                    </li>
                                    )
                                }
                                <AuthButtons />
                            </ul>
                        </nav>

                    </div>
                </div>
            </header>

            {/* mobile navbar */}
            <div
                className={`mobile-navbar fixed top-0 left-0 h-full bg-${mainColor} z-30 w-64 shadow-lg p-5 ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
                    }`}
            >
                <div className="mobile-navbar-wrapper flex flex-col h-full justify-between">
                    <div className="mobile-navbar-links">
                        <ul className="flex flex-col space-y-4">
                            {
                                links.map(({ href, text }) => (
                                    <li key={text}>
                                        <NavLink
                                            to={href}
                                            className="active border-b-2 border-white text-white pb-2"
                                            onClick={toggleMobileNav}
                                        >
                                            {text}
                                        </NavLink>
                                    </li>
                                )
                                )
                            }
                            <AuthButtons type='mobile' />
                        </ul>
                    </div>
                </div>
            </div>

        </>

    )
};

{/* <nav>
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
        </nav> */}