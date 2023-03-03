import { NavLink } from "react-router-dom"

type Props = {
  text: string
  to: string
}

export const NavMenuItem: React.FC<Props> = ({ text, to }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "text-cfared" : "text-black")}
      >
        {text}
      </NavLink>
    </li>
  )
}
