import { Form } from '@/components';
import axios from 'axios';
import { useState } from 'react';
import { API } from '../../services';
import { useForm } from '../../hooks/useForm';
import { AuthConsumer, ACTIONS } from '../../auth';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '../../components/Spinner';
import { toast } from 'sonner';

const names = {
    name: 'nombre',
    lastname: 'apellido',
    address: 'direccion',
    phone: 'telefono',
    userId: 'userId',
    rolId: 'rolId',
    email: 'correo',
    password: 'clave',
}

const initialState = {
    name: '',
    lastname: '',
    address: '',
    userId: '2',
    phone: '',
    rolId: 1,
    email: '',
    password: '',
}

export const Register = () => {
    const [{ user, isLoggedIn, isLoading, error }, dispatch] = AuthConsumer();

    console.log({user, isLoggedIn, isLoading, error});

    const navigate = useNavigate();


    const { formState, onInputChange, onResetForm } = useForm({
        nombre: '',
        apellido: '',
        direccion: '',
        telefono: '',
        userId: '2',
        rolId: 1,
        correo: '',
        clave: '',
    });

    const getData = async () => {
        dispatch({ type: ACTIONS.REGISTER_REQUEST });

        await axios
            .post(API.SESSION.POST.USER.REGISTER, formState)
            .then(({ data }) => {
                data && dispatch({ type: ACTIONS.REGISTER_SUCCESS, payload: data });
                
                navigate('/login');
                
            }).catch((err) => {
                console.error(err);
                dispatch({ type: ACTIONS.REGISTER_FAILURE, payload: err });
            });
    };


    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(formState);
        getData();
    };

    return (
        <form className=' py-4 px-6 rounded-xl border-4 border-red-700 w-[60%] m-auto my-10' onSubmit={onSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h1 className="text-base font-semibold leading-7 text-gray-900">Registro</h1>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        Bienvenido a esta plataforma.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 required">
                                Correo Electronico
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={onInputChange}
                                    id="email"
                                    name="correo"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        {/* Clave */}
                        <div className="sm:col-span-3">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 required">
                                Contraseña
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={onInputChange}
                                    type="password"
                                    name="clave"
                                    id="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="********"
                                />
                            </div>
                        </div>


                    </div>
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Información Personal</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">Use una dirección permanente donde pueda recibir correo.</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="required block text-sm font-medium leading-6 text-gray-900">
                                Nombre
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={onInputChange}
                                    type="text"
                                    name="nombre"
                                    id="name"
                                    required
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="required block text-sm font-medium leading-6 text-gray-900">
                                Apellido
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={onInputChange}
                                    type="text"
                                    name="apellido"
                                    id="lastname"
                                    required
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>



                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="required block text-sm font-medium leading-6 text-gray-900">
                                Rol
                            </label>
                            <div className="mt-2">
                                <select
                                    onChange={onInputChange}
                                    id="rolId"
                                    name="rolId"
                                    defaultValue={formState.rolId}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option value={1}>Estudiante</option>
                                    <option value={2}>Maestro</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                Dirección
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={onInputChange}
                                    type="text"
                                    name="direccion"
                                    id="address"
                                    autoComplete="street-address"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-6 sm:col-start-1 lg:col-span-2 ">
                            <label htmlFor="telefono" className="block text-sm font-medium leading-6 text-gray-900">
                                Telefono
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={onInputChange}
                                    type="number"
                                    name="telefono"
                                    id="phone"
                                    autoComplete="phone-number"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />

                            </div>
                        </div>

                        <div className="sm:col-span-6 sm:col-start-1 lg:col-span-4 ">
                            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                Ciudad
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={onInputChange}
                                    type="text"
                                    name="ciudad"
                                    id="city"
                                    autoComplete="address-level2"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>


                    </div>
                </div>


            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" onClick={() => navigate('/login')} className="text-sm font-semibold leading-6 text-gray-900">
                    Cancelar
                </button>
                <button
                    type="submit"
                    className={`flex items-center gap-2 rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm border-red-700 hover:text-red-700 hover:bg-white border-2  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700`}
                    disabled={isLoading}
                >
                    Registrarse
                    {
                        isLoading && <Spinner className='w-4 h-4' />
                    }

                </button>
            </div>
        </form>
    )
}
