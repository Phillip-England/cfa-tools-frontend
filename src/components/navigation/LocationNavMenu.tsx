import { NavMenuItem } from "./NavMenuItem"

type Props = {
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const LocationNavMenu: React.FC<Props> = ({ setMenuActive }) => {
  return (
    <>
      <ul className="flex w-full flex-col">
        <NavMenuItem
          text={"Tools"}
          to={"/location/tools"}
          setMenuActive={setMenuActive}
        />
        <NavMenuItem
          text={"Location Settings"}
          to={"/location/settings"}
          setMenuActive={setMenuActive}
        />
        <NavMenuItem
          text={"Change Location"}
          to={"/app/locations"}
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
