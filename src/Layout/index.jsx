import { Outlet } from "react-router-dom";
import { NavBar } from "@/components";

export const Layout = () => {
  return (
    <div className="container mx-auto px-2">
      <NavBar />
      <Outlet />
    </div>
  )
}


