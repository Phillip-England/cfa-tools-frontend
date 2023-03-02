import { Link, Outlet } from "react-router-dom"
import { Navbar } from "../components/navigation/Navbar"

export const GuestLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
