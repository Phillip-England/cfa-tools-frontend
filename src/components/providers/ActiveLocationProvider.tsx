import { useState } from "react"
import { ActiveLocationContext } from "../../context/ActiveLocationContext"
import { Location } from "../../types/Location"

export const ActiveLocationProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [activeLocation, setActiveLocation] = useState<null | Location>(null)

  return (
    <>
      <ActiveLocationContext.Provider
        value={{ activeLocation, setActiveLocation }}
      >
        {children}
      </ActiveLocationContext.Provider>
    </>
  )
}
