import { Link } from "react-router-dom";
import { CoursesSection, AreasSeccion } from "./sections";
import { AuthConsumer } from "../../auth";

export const Dashboard = () => {
// const [{ user }, dispatch] = AuthConsumer();


  return (
    <div className="container">
      <div className="w-full h-32 p-4 bg-red-700 text-white mb-5 rounded-sm">
        <Link to='/' className="flex w-fit">
          <img className="h-20 w-20 rounded-full" src='https://avatars.githubusercontent.com/u/55479192?v=4' alt="" />
          <div className="ms-2 backdrop-blur-sm bg-white/20 rounded-lg p-2">
            <h1 className="text-2xl hover:underline">Knowly virtual: Area Personal</h1>
            <small className="hover:underline">Estudiante Activo</small>
          </div>
        </Link>
      </div>
      <AreasSeccion />
      <CoursesSection />
    </div>
  );
};