import { Link, useParams } from "react-router-dom"

export const Course = () => {
const {courserId} = useParams()


    const crs = [
        {
            id: 1,
            title: 'Estructura de Datos (Virtual)',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            image: 'https://picsum.photos/200',
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
            image: 'https://picsum.photos/200',
            link: '/course/3',
            teacher: 'Fernando Figueroa'
        }
    ]

    const course = crs.find(course => course.id == courserId)

  return (
    <>

          <nav class="flex" aria-label="Breadcrumb">
              <ol class="inline-flex items-center space-x-1 md:space-x-3">
                  <li class="inline-flex items-center">
                      <Link to='/dashboard' class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                          <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                          </svg>
                          Area personal
                      </Link>
                  </li>
                  <li>
                      <div class="flex items-center">
                          <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                          </svg>
                          <p class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Mis Cursos</p>
                      </div>
                  </li>
                  <li aria-current="page">
                      <div class="flex items-center">
                          <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                          </svg>
                          <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">{course.title}</span>
                      </div>
                  </li>
              </ol>
          </nav>

    {
        course && (
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl">{course.title}</h1>
                <h4 className="text-gray-500">{course.teacher}</h4>
                <div className="max-w-sm rounded overflow-hidden shadow-l relative m-10">
                    <div className=" w-full h-[40%]">
                        <img
                            className="w-full h-52"
                            src={course.image}
                            alt="Sunset in the mountains"
                            loading="lazy"
                        />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{course.title}</div>
                        <p className="text-gray-700 text-base">
                            {course.description}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#virtual</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#universidad</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#ingenieria</span>
                    </div>
                </div>
            </div>
        )
        
                        
    }
    </>
  )
}
