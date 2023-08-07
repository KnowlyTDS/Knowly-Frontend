import { Form } from '@/components';
import axios from 'axios';
import { useState } from 'react';
import { API } from '../../services';


export const Register = () => {

    const [form, setForm] = useState({
        name: '',
        lastname: '',
        address: '',
        userId: '',
        phone: '',
        rolId: 0,
        email: '',
        password: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();

        axios
        .post(API.SESSION.POST.REGISTER, form)
        .then(console.log)
        .catch(console.error);
    }

    const onChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });

    }
    

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
                                    onChange={onChange}
                                    id="email"
                                    name="email"
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
                                    onChange={onChange}
                                    type="password"
                                    name="password"
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
                                    onChange={onChange}
                                    type="text"
                                    name="name"
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
                                    onChange={onChange}
                                    type="text"
                                    name="lastname"
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
                                    onChange={onChange}
                                    id="rolId"
                                    name="rolId"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option>Estudiante</option>
                                    <option>Maestro</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                Dirección
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={onChange}
                                    type="text"
                                    name="address"
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
                                    onChange={onChange}
                                    type="number"
                                    name="phone"
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
                                    onChange={onChange}
                                    type="text"
                                    name="city"
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
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    )
}
