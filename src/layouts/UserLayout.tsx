import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navigation/Navbar"
import { MainContentWrapper } from "../components/MainContentWrapper"
import { Footer } from "../components/footer/Footer"
import { UserNavMenu } from "../components/navigation/UserNavMenu"
import { useState } from "react"

export const UserLayout: React.FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false)

  return (
    <>
      <Navbar
        setMenuActive={setMenuActive}
        menuActive={menuActive}
        navMenu={<UserNavMenu setMenuActive={setMenuActive} />}
      />
      <MainContentWrapper outlet={<Outlet />} />
      <Footer />
    </>
  )
}
