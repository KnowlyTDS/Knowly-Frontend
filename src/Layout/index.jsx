import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="container-[500px] bg-slate-600">
        <Outlet />
      </div>
    </>
  )
}


