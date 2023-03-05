import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navigation/Navbar"
import { useState } from "react"
import { CaresNavMenu } from "../components/navigation/CaresNavMenu"
import { MainContentWrapper } from "../components/MainContentWrapper"
import { Footer } from "../components/footer/Footer"

export const CaresLayout: React.FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false)

  return (
    <>
      <Navbar
        setMenuActive={setMenuActive}
        menuActive={menuActive}
        navMenu={<CaresNavMenu setMenuActive={setMenuActive} />}
      />
      <MainContentWrapper outlet={<Outlet />} />
      <Footer />
    </>
  )
}
