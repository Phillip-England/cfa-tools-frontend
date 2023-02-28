import { useContext, useEffect } from "react"
import { Outlet } from "react-router-dom"
import { MasterContext } from "../MasterContext"
import { dropActiveLocation } from "../../requests/dropActiveLocation"

/*
This wrapper helps to ensure that all user routes drop the active location
Once a user exits routes for their active location, it must be dropped
so another one can be selected

User routes must also drop all location resources
This helps to ensure that upon selecting another location,
new resources can be properly loaded
*/

export const UserRoutes: React.FC = () => {
  const masterContext = useContext(MasterContext)
  const { page, activeLocation, setActiveLocation } = masterContext

  useEffect(() => {
    // all user routes drop the current active location
    if (activeLocation != null) {
      dropActiveLocation().then(() => {
        setActiveLocation(null)
      })
    }
  }, [page])

  return (
    <>
      <Outlet />
    </>
  )
}
