import { Link } from "react-router-dom";
import { CoursesSection, AreasSeccion } from "./sections";

export const Dashboard = () => {


  return (
    <div className="container">
      <div className="w-full h-32 p-4 bg-red-700 text-white mb-5 rounded-sm">
        <Link to='/' className="flex w-fit">
          <img className="h-20 w-20 rounded-full" src='https://avatars.githubusercontent.com/u/55479192?v=4' alt=""  />
          <div className="ms-2">
          <h1 className="text-2xl ">Knowly virtual: Area Personal</h1>
          <small>Estudiante Activo</small>
          </div>
        </Link>
      </div>
      <AreasSeccion />
      <CoursesSection />
    </div>
  );
};