import { NavMenuItem } from "./NavMenuItem"

type Props = {
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const GuestNavMenu: React.FC<Props> = ({ setMenuActive }) => {
  return (
    <>
      <ul className="flex w-full flex-col">
        <NavMenuItem
          text={"Log In"}
          to={"/login"}
          setMenuActive={setMenuActive}
        />
        <NavMenuItem
          text={"Sign Up"}
          to={"/signup"}
          setMenuActive={setMenuActive}
        />
      </ul>
    </>
  )
}
