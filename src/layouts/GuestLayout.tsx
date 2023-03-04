import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navigation/Navbar"
import { GuestNavMenu } from "../components/navigation/GuestNavMenu"
import { useState } from "react"
import { MainContentWrapper } from "../components/MainContentWrapper"
import { Footer } from "../components/footer/Footer"

export const GuestLayout: React.FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false)

  return (
    <>
      <Navbar
        setMenuActive={setMenuActive}
        menuActive={menuActive}
        navMenu={<GuestNavMenu setMenuActive={setMenuActive} />}
      />
      <MainContentWrapper outlet={<Outlet />} />
      <Footer />
    </>
  )
}
