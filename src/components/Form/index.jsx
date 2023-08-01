import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthConsumer, ACTIONS } from "@/auth";
import image from '@/assets/image.svg'

export const Form = ({ type }) => {
    const navigate = useNavigate();
    const [authed, dispatch] = AuthConsumer();

    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const typeURL = type === "login" ? "login" : "register";
    const typeTitle = type === "login" ? "Iniciar Sesión" : "Registrarse";


    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.LOGIN })

        navigate('/dashboard')
    }

    const onChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    return (
        <div className="flex  items-center 
        justify-center
        bg-red-700
        w-fit
        m-auto
        border-2
        border-red-700
        rounded-lg
        ">


            <form onSubmit={onSubmit} className="max-w-sm h-60 text-white rounded-lg flex flex-col justify-center items-center">
                <h1 className="text-center font-bold text-2xl">{typeTitle}</h1>

                <div className="flex flex-col p-2 px-20 border-collaps gap-2">
                
                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
                        <div className="sm:col-span-6">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                                <span className="flex select-none  items-center pl-3 text-white sm:text-sm">usuario/</span>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    autoComplete="off"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="janesmith"
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-6">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                                    <span className="flex select-none  items-center pl-3 text-white sm:text-sm">clave/</span>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    autoComplete="off"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                    </div>
                    {/* <input
                        className="border-2 border-gray-300 p-1 rounded-md"
                        onChange={onChange} name="username" type="text" placeholder="User" />
                    <input
                        className="border-2 border-gray-300 p-1 rounded-md"
                        onChange={onChange} name="password" type="password" placeholder="Contraseña" /> */}
                    <Link to={type === 'login' ? '/register' : '/login'}
                        className="text-end text-[10px]  hover:text-slate-300 font-medium "
                    >
                        {
                            type === 'login'
                                ? <span>¿No tienes cuenta? <span className="underline">Registrate</span></span>
                                : <span>¿Ya tienes cuenta? <span className="underline">Inicia Sesión</span></span>
                        }
                    </Link>
                </div>
                <button
                    type="submit"
                    className="
                    bg-white
                    text-red-700
                    p-1
                    px-5
                    rounded-full
                    hover:bg-red-600
                    hover:text-white
                    hover:shadow-lg
                    border-2
                    border-white
                    mt-3
                    text-sm
                    font-bold
                    ">
                    {typeTitle}
                </button>
            </form>

            <img src={image} alt="image" className="w-80 bg-white h-96 p-3 rounded-lg" />
        </div>
    )
}
