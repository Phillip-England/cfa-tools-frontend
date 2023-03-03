import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navigation/Navbar"
import { GuestNavMenu } from "../components/navigation/GuestNavMenu"

export const GuestLayout: React.FC = () => {
  return (
    <>
      <Navbar navMenu={<GuestNavMenu />} />
      <Outlet />
    </>
  )
}
