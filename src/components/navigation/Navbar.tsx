import { faBars, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ReactElement, useState } from "react"

type Props = {
  navMenu: ReactElement
}

export const Navbar: React.FC<Props> = ({ navMenu }) => {
  const [menu, setMenu] = useState<boolean>(false)

  return (
    <nav>
      <div className="fixed top-0 z-50 flex h-16 w-screen items-center justify-between bg-white text-black shadow-md">
        <FontAwesomeIcon
          icon={menu ? faX : faBars}
          className="p-4"
          onClick={() => {
            setMenu(!menu)
          }}
        />
        <h1 className="m-4 select-none font-medium">Chick-fil-A Tools</h1>
      </div>
      <div className="h-16"></div>
      {menu ? (
        <>
          <div className="fixed z-50 h-screen w-8/12 border bg-white shadow-md">
            {navMenu}
          </div>
          <div
            className="fixed h-screen w-screen bg-black opacity-40"
            onClick={() => {
              setMenu(false)
            }}
          ></div>
        </>
      ) : null}
    </nav>
  )
}
