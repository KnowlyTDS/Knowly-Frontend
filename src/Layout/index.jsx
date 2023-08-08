import { Outlet } from "react-router-dom";
import { NavBar } from "@/components";
import { Toaster } from 'sonner'
export const Layout = () => {
  return (
    <div className="container mx-auto px-2">
      <Toaster position="top-center" richColors closeButton />
      <NavBar />
      <Outlet />
    </div>
  )
}


