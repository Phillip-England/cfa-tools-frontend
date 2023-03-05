import { Outlet } from "react-router-dom"
import { MainContentWrapper } from "../components/MainContentWrapper"
import { LocationNavMenu } from "../components/navigation/LocationNavMenu"
import { Navbar } from "../components/navigation/Navbar"
import { Footer } from "../components/footer/Footer"
import { useState } from "react"

export const LocationLayout: React.FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false)

  return (
    <>
      <Navbar
        setMenuActive={setMenuActive}
        menuActive={menuActive}
        navMenu={<LocationNavMenu setMenuActive={setMenuActive} />}
      />
      <MainContentWrapper outlet={<Outlet />} />
      <Footer />
    </>
  )
}
