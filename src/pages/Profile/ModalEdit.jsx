import { useState } from "react";
import { ACTIONS, AuthConsumer } from "../../auth";
import { API } from "../../services";

export const ModalEdit = ({ isModalOpen, handleCloseModal }) => {
    const [{ user: { description, username, name } }, dispatch] = AuthConsumer();

    const [dataEditted, setDataEditted] = useState({
        username,
        description,
        name
    });

    const handleChange = (e) => {
        setDataEditted({
            ...dataEditted,
            [e.target.name]: e.target.value
        })
    }


    const onSave = async () => {
        dispatch({ type: ACTIONS.EDDIT_REQUEST })

        // const { data } = await axios.put(API.USER.PUT.EDDIT, dataEditted);

        // console.log(dataEditted);
        dispatch({ type: ACTIONS.EDDIT_SUCCESS, payload: dataEditted })
        handleCloseModal();

    }



    return (
        <>

            <div className="flex items-center justify-center h-screen">
                {/* Main modal */}
                {isModalOpen && (
                    <div className="fixed  top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
                        <div className="relative w-full max-w-2xl max-h-full">
                            {/* Modal content */}
                            <div className="relative bg-white  rounded-lg shadow dark:bg-gray-700">
                                {/* Modal header */}
                                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Editar Perfil
                                    </h3>
                                    <button
                                        type="button"
                                        onClick={handleCloseModal}
                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <svg
                                            className="w-3 h-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 14"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                            />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                {/* Modal body */}
                                <div className="p-6 space-y-6">
                                    {/* Usuario */}
                                    <div className="flex flex-col">
                                        <label htmlFor="username" className="text-sm font-medium text-gray-900 dark:text-gray-50">
                                            Usuario
                                        </label>
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            autoComplete="off"
                                            className="border rounded-md px-3 py-2 mt-1 mb-5 text-sm w-full"
                                            placeholder="Nombre"
                                            onChange={handleChange}
                                            defaultValue={username}
                                        />
                                    </div>

                                    {/* Nombre */}
                                    <div className="flex flex-col">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-900 dark:text-gray-50">
                                            Nombre
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            autoComplete="off"
                                            className="border rounded-md px-3 py-2 mt-1 mb-5 text-sm w-full"
                                            placeholder="Nombre"
                                            onChange={handleChange}
                                            defaultValue={name}
                                        />
                                    </div>

                                    {/* Description */}
                                    <div className="flex flex-col">
                                        <label htmlFor="username" className="text-sm font-medium text-gray-900 dark:text-gray-50">
                                            Descripción
                                        </label>
                                        <input
                                            type="text"
                                            name="description"
                                            id="description"
                                            autoComplete="off"
                                            className="border rounded-md px-3 py-2 mt-1 mb-5 text-sm w-full"
                                            placeholder="Descripción"
                                            onChange={handleChange}
                                            defaultValue={description}
                                        />
                                    </div>
                                </div>
                                {/* Modal footer */}
                                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button
                                        onClick={onSave}
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Guardar
                                    </button>
                                    <button
                                        onClick={handleCloseModal}
                                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};
