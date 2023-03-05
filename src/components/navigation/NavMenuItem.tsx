import { NavLink } from "react-router-dom"

type Props = {
  text: string
  to: string
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavMenuItem: React.FC<Props> = ({ text, to, setMenuActive }) => {
  return (
    <li className="flex">
      <NavLink
        onClick={() => {
          setMenuActive(false)
        }}
        to={to}
        className={({ isActive }) =>
          isActive ? "w-full p-4 text-lg text-cfared" : "w-full p-4 text-black"
        }
      >
        {text}
      </NavLink>
    </li>
  )
}
