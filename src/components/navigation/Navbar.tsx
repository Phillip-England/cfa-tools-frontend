import { faBars, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ReactElement } from "react"

type Props = {
  navMenu: ReactElement
  menuActive: boolean
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const Navbar: React.FC<Props> = ({
  navMenu,
  setMenuActive,
  menuActive,
}) => {
  return (
    <nav>
      <div className="fixed top-0 z-50 flex h-16 w-screen items-center justify-between bg-white text-black shadow-md">
        <FontAwesomeIcon
          icon={menuActive ? faX : faBars}
          className="p-4"
          onClick={() => {
            setMenuActive(!menuActive)
          }}
        />
        <h1 className="m-4 select-none font-medium">Chick-fil-A Tools</h1>
      </div>
      <div className="h-16"></div>
      {menuActive ? (
        <>
          <div className="fixed z-50 flex h-screen w-8/12 flex-col border bg-white shadow-md">
            {navMenu}
          </div>
          <div
            className="fixed z-40 h-screen w-screen bg-black opacity-40"
            onClick={() => {
              setMenuActive(false)
            }}
          ></div>
        </>
      ) : null}
    </nav>
  )
}
