import { createContext } from "react"
import { Location } from "../types/Location"

interface ActiveLocationContextProps {
  activeLocation: null | Location
  setActiveLocation: React.Dispatch<React.SetStateAction<Location | null>>
}

export const ActiveLocationContext = createContext<ActiveLocationContextProps>({
  activeLocation: null,
  setActiveLocation: () => {},
})
