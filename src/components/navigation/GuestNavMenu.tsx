import { NavLink } from "react-router-dom"
import { NavMenuItem } from "./NavMenuItem"

export const GuestNavMenu: React.FC = () => {
  return (
    <>
      <ul>
        <NavMenuItem text={"Log In"} to={"/login"} />
        <NavMenuItem text={"Sign Up"} to={"/signup"} />
      </ul>
    </>
  )
}
