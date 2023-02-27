import { createContext } from "react"
import { User } from "../types/User"

interface UserContextProps {
  user: null | User
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
})
