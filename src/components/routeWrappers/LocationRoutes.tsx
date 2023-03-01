import { useContext, useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { getActiveLocation } from "../../requests/getActiveLocation"
import { Location } from "../../types/Location"
import { MasterContext } from "../context/MasterContext"

/*
This wrapper helps to always ensure we have an active location.
It should wrap all routes that require an active location
If an active location is dropped for whatever reason
It will push us back to the application homescreen
*/

export const LocationRoutes: React.FC = () => {
  const masterContext = useContext(MasterContext)
  const { page, setActiveLocation, activeLocation, setCares } = masterContext
  const [redirect, setRedirect] = useState<boolean>(false)

  useEffect(() => {
    // resources must be dropped to ensure reload upon entering a new tool
    setCares(null)
    // if the active location has not been set, set it
    if (activeLocation == null) {
      getActiveLocation().then(async (res) => {
        if (res.status !== 200) {
          setRedirect(true)
        }
        let json = await res.json()
        let location: Location = {
          _id: json.data._id,
          user: json.data.user,
          name: json.data.name,
          number: json.data.number,
        }
        setActiveLocation(location)
      })
    }
  }, [page])

  return <>{redirect ? <Navigate to="/app" /> : <Outlet />}</>
}
