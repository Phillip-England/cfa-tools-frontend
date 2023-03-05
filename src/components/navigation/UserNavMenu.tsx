import { NavMenuItem } from "./NavMenuItem"

type Props = {
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const UserNavMenu: React.FC<Props> = ({ setMenuActive }) => {
  return (
    <>
      <ul className="flex w-full flex-col">
        <NavMenuItem
          text={"Locations"}
          to={"/app/locations"}
          setMenuActive={setMenuActive}
        />
        <NavMenuItem
          text={"User Settings"}
          to={"/app/settings"}
          setMenuActive={setMenuActive}
        />
        <NavMenuItem
          text={"Logout"}
          to={"/app/logout"}
          setMenuActive={setMenuActive}
        />
      </ul>
    </>
  )
}
