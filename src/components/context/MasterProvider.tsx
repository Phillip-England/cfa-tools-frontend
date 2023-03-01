import { useState } from "react"
import { Location } from "../../types/Location"
import { User } from "../../types/User"
import { MasterContext } from "./MasterContext"
import { Cares } from "../../types/Cares"

export const MasterProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [activeLocation, setActiveLocation] = useState<null | Location>(null)
  const [appLoading, setAppLoading] = useState<boolean | null>(null)
  const [page, setPage] = useState<null | string>(null)
  const [user, setUser] = useState<null | User>(null)
  const [locations, setLocations] = useState<null | Location[]>(null)
  const [cares, setCares] = useState<null | Cares[]>(null)

  return (
    <>
      <MasterContext.Provider
        value={{
          activeLocation,
          setActiveLocation,
          appLoading,
          setAppLoading,
          page,
          setPage,
          user,
          setUser,
          locations,
          setLocations,
          cares,
          setCares,
        }}
      >
        {children}
      </MasterContext.Provider>
    </>
  )
}
