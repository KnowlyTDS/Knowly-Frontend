import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthConsumer, ACTIONS } from "@/auth";

export const Form = ({ type }) => {
    const navigate = useNavigate();
    const [authed, dispatch] = AuthConsumer();

    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const typeURL = type === "login" ? "login" : "register";
    const typeTitle = type === "login" ? "Iniciar Sessión" : "Registrarse";


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
        <form onSubmit={onSubmit} className="container mx-auto bg-orange-300 max-w-sm text-white rounded-sm h-44 flex flex-col justify-center items-center">
            <h1 className="text-center">{typeTitle}</h1>
            <div className="flex flex-col p-2 border-collaps gap-2">
                <input
                    className="border-2 border-gray-300 p-1 rounded-md"
                    onChange={onChange} name="username" type="text" placeholder="Username" />
                <input
                    className="border-2 border-gray-300 p-1 rounded-md"
                    onChange={onChange} name="password" type="password" placeholder="Password" />
                <Link to={type === 'login' ? '/register' : '/login'}
                    className="text-center text-blue-500 hover:text-blue-700"
                >
                    {
                        type === 'login'
                            ? '¿No tienes cuenta? Registrate'
                            : '¿Ya tienes cuenta? Inicia Sessión'
                    }
                </Link>
            </div>
            <button
                type="submit"
                className="bg-zinc-800 w-fit px-3 py-1 rounded-full hover:text-slate-900 hover:bg-slate-400">
                Submit
            </button>
        </form>
    )
}
