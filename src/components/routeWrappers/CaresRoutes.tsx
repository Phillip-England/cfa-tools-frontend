import { User } from "../../types/User"
import { useContext, useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { getActiveLocation } from "../../requests/getActiveLocation"
import { Location } from "../../types/Location"
import { MasterContext } from "../MasterContext"

/*
This wrapper helps to ensure we always have a list of up to date cares
This should be found under "LocationRoutes" because all cares must be
associated with a location
*/

export const CaresRoutes: React.FC = () => {
  const masterContext = useContext(MasterContext)
  const { page } = masterContext
  const [redirect, setRedirect] = useState<boolean>(false)

  useEffect(() => {}, [page])

  return <>{redirect ? <Navigate to="/app" /> : <Outlet />}</>
}
