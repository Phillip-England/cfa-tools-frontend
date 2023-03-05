import { NavMenuItem } from "./NavMenuItem"

type Props = {
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const CaresNavMenu: React.FC<Props> = ({ setMenuActive }) => {
  return (
    <>
      <ul className="flex w-full flex-col">
        <NavMenuItem
          text={"Tools"}
          to={"/location/tools"}
          setMenuActive={setMenuActive}
        />
        <NavMenuItem
          text={"Create Cares"}
          to={"/cares/create"}
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
