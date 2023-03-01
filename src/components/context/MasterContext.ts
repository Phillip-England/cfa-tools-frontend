import { createContext } from "react"
import { User } from "../../types/User"
import { Location } from "../../types/Location"
import { Cares } from "../../types/Cares"

interface MasterContextProps {
  appLoading: boolean | null
  setAppLoading: React.Dispatch<React.SetStateAction<boolean | null>>
  activeLocation: null | Location
  setActiveLocation: React.Dispatch<React.SetStateAction<Location | null>>
  page: null | string
  setPage: React.Dispatch<React.SetStateAction<string | null>>
  user: null | User
  setUser: React.Dispatch<React.SetStateAction<User | null>>
  locations: null | Location[]
  setLocations: React.Dispatch<React.SetStateAction<null | Location[]>>
  cares: null | Cares[]
  setCares: React.Dispatch<React.SetStateAction<null | Cares[]>>
}

export const MasterContext = createContext<MasterContextProps>({
  appLoading: null,
  setAppLoading: () => {},
  activeLocation: null,
  setActiveLocation: () => {},
  page: null,
  setPage: () => {},
  user: null,
  setUser: () => {},
  locations: null,
  setLocations: () => {},
  cares: null,
  setCares: () => {},
})
