import { createContext } from "react"
import { User } from "../../types/User"
import { Location } from "../../types/Location"
import { Cares } from "../../types/Cares"

interface MasterContextProps {
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
  limitedCares: undefined | Cares[]
  setLimitedCares: React.Dispatch<React.SetStateAction<undefined | Cares[]>>
  caresStartRange: number
  setCaresStartRange: React.Dispatch<React.SetStateAction<number>>
  caresEndRange: number
  setCaresEndRange: React.Dispatch<React.SetStateAction<number>>
}

export const MasterContext = createContext<MasterContextProps>({
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
  limitedCares: undefined,
  setLimitedCares: () => {},
  caresStartRange: 0,
  setCaresStartRange: () => {},
  caresEndRange: 15,
  setCaresEndRange: () => {},
})
