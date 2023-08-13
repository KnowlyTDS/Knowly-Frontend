import { useEffect, useState } from "react";
import { SpinnerGeneral } from "../../../components/Spinner";
import { Link } from "react-router-dom";

export const CoursesSection = () => {
    const [courses, setCourses] = useState([])
    const [isImageLoading, setIsImageLoading] = useState(false);


    const crs = [
        {
            id: 1,
            title: 'Estructura de Datos (Virtual)',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            image: 'https://picsum.photos/100',
            link: '/course/1',
            teacher: 'Daniel Almonte'
        },
        {
            id: 2,
            title: 'Introducción a la Ingeniería de Software(Virtual)',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            image: 'https://picsum.photos/200',
            link: '/course/2',
            teacher: 'Ambar Sánchez'
        },
        {
            id: 3,
            title: 'Plan de Negocios(Virtual)',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            image: 'https://picsum.photos/300',
            link: '/course/3',
            teacher: 'Fernando Figueroa'
        }, {
            id: 4,
            title: 'Introducción al Desarrollo de Aplicaciones Móviles(Virtual) ',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            image: 'https://picsum.photos/400',
            link: '/course/3',
            teacher: 'Julio Hernández'

        }
    ]

    useEffect(() => {
        setCourses(crs)
    }, [])


    const handleImageLoad = (e) => {
        setIsImageLoading(true);

    };

    return (
        <section className=" flex flex-col justify-center items-center ">
            <h1 className="text-2xl mb-10">Vista general de curso</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:justify-center gap-4">
                {
                    courses.map((course, index) => (
                        <Link to={course.link} key={index} className="max-w-sm rounded overflow-hidden shadow-l relative">
                            <div className="absolute w-full h-[40%]">
                                {
                                    isImageLoading && <SpinnerGeneral />
                                }
                                <img
                                    className="w-full"
                                    src={course.image}
                                    alt="Sunset in the mountains"
                                    loading="lazy"
                                    onLoad={handleImageLoad}
                                    style={{ display: isImageLoading ? "none" : "block" }}
                                />
                                <div className="absolute top-0 right-0 bg-red-700 text-white p-1 rounded-bl">
                                    <span className="material-symbols-outlined text-xl">favorite</span>
                                </div>
                            </div>


                            <div className="px-6 py-4 mt-[70%]">
                                <div className="font-bold text-lg mb-2 text-nowrap truncate">{course.title}</div>
                                <p className="text-gray-700 text-base">
                                    {course.description}
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                            </div>
                        </Link>
                    ))

                }
            </div>
        </section>
    )
}
