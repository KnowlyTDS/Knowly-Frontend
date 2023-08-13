import { NavLink, useNavigate } from 'react-router-dom'
import { AuthConsumer, ACTIONS } from '../../auth';
import './nav.css'
import { useState } from 'react';
import { toast } from 'sonner';
import { ProfileDropdown } from './ProfileDropdown';


export const NavBar = () => {

    let navigate = useNavigate();
    const [{ user, isLoggedIn, isLoading, error }, dispatch] = AuthConsumer();
    const [isOpen, setIsOpen] = useState(false);


    const toggleMobileNav = () => {
        setIsOpen(!isOpen);
    };

    const links = [{
        href: '/home',
        text: 'Home',
    }, {
        href: '/about',
        text: 'About',
    }];

    const isAuthedLinks = [
        {
            href: '/dashboard',
            text: 'Dashboard',
        }, {
            href: '/calendar',
            text: 'Calendar',
        }, {
            href: '/homework',
            text: 'Homework',
        }
    ]



    const NavAnchor = ({ to, children, className, onClick, type }) => {
        const [active, setActive] = useState(false);

        return (
            <NavLink
                to={to}
                id={type}
                className={`
                ${active ? `border-b-2 border-red-700 pb-2` : 'hover:bg-red-100 py-2 px-1 rounded-md'} 
                ${className} 
                ${type === 'sesion' && 'px-3 py-1 rounded-md text-white hover:bg-red-800'}
                `}
                style={({ isActive }) => setActive(isActive)}
                onClick={onClick}
            >
                {children}
            </NavLink>
        )
    }


    const BtnSesion = ({ children, className, type }) => {

        const handleSesion = () => {
            setIsOpen(false)
            if (type === 'login') return navigate('/login', { replace: true });
            dispatch({ type: ACTIONS.LOGOUT })
            navigate('/login', { replace: true })

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
            ? tailwindClass = `text-red-700 bg-white hover:bg-red-600 hover:text-white hover:shadow-lg border-2 border-white`
            : tailwindClass = `text-white bg-red-700 hover:bg-red-600`

        if (!isLoggedIn) return <li>
            <BtnSesion
                type='login'
                onClick={onClick}
                className={tailwindClass}
            >
                Login
            </BtnSesion>
        </li>

        if (type === 'mobile') return <li>
            <BtnSesion
                type='logout'
                onClick={onClick}
                className={tailwindClass}
            >
                Logout
            </BtnSesion>
        </li>


        return <li><ProfileDropdown />
        </li>
    }

    const linksRender = isLoggedIn ? isAuthedLinks : links;

    return (
        <>
            <header className="header my-5">
                {/* container */}
                <div className="container  sm:px-8 lg:px-16 xl:px-20 mx-auto">
                    {/* header wrapper */}
                    <div className="header-wrapper flex items-center justify-between">
                        {/* header logo */}
                        <div className="header-logo relative">
                            <span className="font-bold text-2xl bg-red-400 blur-xl text-red-700">knowly</span>
                            <NavLink to="/" className=' absolute left-2 text-white leading-relaxed px-3'>
                                knowly
                            </NavLink>
                        </div>

                        {/* mobile toggle */}
                        <div className="toggle md:hidden">
                            <button
                                onClick={toggleMobileNav}
                                onKeyDown={(e) => {
                                    e.key === 'Escape' && setIsOpen(false)
                                }}
                            >
                                <svg
                                    className={`h-6 w-6 fill-current text-red-700 `}
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
                            <ul className="flex gap-2 items-center text-sm font-semibold">
                                {
                                    linksRender.map(({ href, text }) => {
                                        return (
                                            <li key={text}>
                                                <NavAnchor to={href}>
                                                    {text}
                                                </NavAnchor>
                                            </li>
                                        )
                                    })
                                }
                                <AuthButtons />
                            </ul>
                        </nav>

                    </div>
                </div>
            </header>

            {/* mobile navbar */}
            <div className={`mobile-navbar fixed top-0 left-0 h-full bg-red-700 z-30 w-64 shadow-lg p-5 ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
                <div className="mobile-navbar-wrapper flex flex-col h-full justify-between">
                    <div className="mobile-navbar-links">
                        <NavLink to="/" className='left-2 text-white leading-relaxed px-3'>
                            knowly
                        </NavLink>
                        <hr />
                        <ul className="flex flex-col space-y-4">
                            {
                                linksRender.map(({ href, text }) => (
                                    <li key={text}>
                                        <NavLink
                                            to={href}
                                            className="active border-b-2 border-white text-white pb-2"
                                            onClick={toggleMobileNav}
                                        >
                                            {text}
                                        </NavLink>
                                    </li>
                                ))
                            }
                            <AuthButtons type='mobile' />
                        </ul>
                    </div>
                </div>
            </div>

        </>

    )
};