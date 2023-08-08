import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthConsumer, ACTIONS } from "../../auth";
import image from '@/assets/image.svg'
import './form.css'
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { API } from "../../services";
import { toast } from 'sonner'
import { Spinner } from "../Spinner";


export const Form = ({ type }) => {
    const navigate = useNavigate();
    const [authed, dispatch] = AuthConsumer();

    const [hasPass, setHasPass] = useState(false);
    const [typePassword, setTypePassword] = useState('password')

    const { formState, onInputChange, onResetForm } = useForm({
        email: '',
        password: ''
    })

    useEffect(() => {
        if (authed.isLoggedIn) dispatch({ type: ACTIONS.LOGOUT })
    }, [])

    const typeURL = type === "login" ? "login" : "register";
    const typeTitle = type === "login" ? "Iniciar Sesión" : "Registrarse";

    const togglePassword = () => {
        setTypePassword(typePassword === 'password' ? 'text' : 'password')
    }

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch({ type: ACTIONS.LOGIN_REQUEST })

        axios
            .post(API.SESSION.POST.USER.LOGIN, formState)
            .then(({ data }) => {
                console.log(data);
                dispatch({ type: ACTIONS.LOGIN_SUCCESS, payload: data })
                toast.success(`Bienvenido ${data.userName}!`)
                navigate('/dashboard')

            })
            .catch((error) => {
                console.error(error);
                dispatch({ type: ACTIONS.LOGIN_FAILURE, payload: error.response })
                if (error.response) {
                    toast.error(error.response.data)
                }
            })
    }

    const onChangePassword = (e) => {
        const { value } = e.target;
        if (value.length > 0) {
            setHasPass(true)
        }
        else {
            setHasPass(false)
        }

    }

    // console.log(authed);
    return (
        <div className="flex items-center justify-center bg-red-700 w-fit m-auto border-2 border-red-700 rounded-lg">
            <form onSubmit={onSubmit} className="max-w-sm h-60 text-white rounded-lg flex flex-col justify-center items-center">
                <h1 className="text-center font-bold text-2xl">{typeTitle}</h1>
                <div className="flex flex-col p-2 px-20 border-collaps gap-2">
                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
                        <div className="sm:col-span-6">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-violet-300">
                                <span className="flex select-none  items-center pl-3 text-violet-100 sm:text-sm">
                                    @
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    autoComplete="off"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-50 focus:ring-0 sm:text-sm sm:leading-6"
                                    // placeholder="janesmith"
                                    onChange={onInputChange}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-6">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-violet-300 ">
                                <span onClick={togglePassword} className="flex select-none  items-center pl-3 text-white sm:text-sm material-symbols-outlined">
                                        {typePassword === 'password' ? 'visibility_off' : 'visibility'}
                                    </span>
                                <input
                                    type={typePassword}
                                    name="password"
                                    id="password"
                                    required
                                    autoComplete="off"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    onChange={onInputChange}
                                    onChangeCapture={onChangePassword}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Link to={type === 'login' ? '/register' : '/login'} className="text-end text-[10px]  hover:text-slate-300 font-medium">
                    ¿No tienes cuenta? <span className="underline">Registrate</span>
                </Link>
                <button
                    type="submit"
                    className="flex gap-2 bg-white text-red-700 p-1 px-5 rounded-full hover:bg-red-600 hover:text-white hover:shadow-lg border-2 border-white mt-6 text-sm font-bold">
                    {typeTitle}
                    {
                        authed.isLoading && <Spinner className='w-4 h-4' />
                    }
                </button>
            </form>

            <img src={image} alt="image" id='image' className="w-80 bg-white h-96 p-3 rounded-lg lg:block sm:hidden" />
        </div>
    )
}
