import { Outlet } from "react-router-dom";
import { NavBar } from "@/components";
import { Toaster } from 'sonner'
export const Layout = () => {
  return (
    <>
      <Toaster position="top-center" richColors closeButton />
      <NavBar />
      <div className="container  sm:px-8 lg:px-16 xl:px-20 mx-auto ">
        <Outlet />
      </div>
    </>
  )
}


