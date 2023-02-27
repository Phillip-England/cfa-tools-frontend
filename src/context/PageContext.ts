import { createContext } from "react"

interface PageContextProps {
  page: null | string
  setPage: React.Dispatch<React.SetStateAction<string | null>>
}

export const PageContext = createContext<PageContextProps>({
  page: null,
  setPage: () => {},
})
