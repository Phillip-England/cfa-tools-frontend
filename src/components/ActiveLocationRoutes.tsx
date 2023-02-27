import { User } from "../types/User"
import { useContext, useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { getActiveLocation } from "../requests/getActiveLocation"
import { Location } from "../types/Location"
import { MasterContext } from "./MasterContext"

export const ActiveLocationRoutes: React.FC = () => {
  const masterContext = useContext(MasterContext)
  const { page, setActiveLocation, appLoading, setAppLoading } = masterContext
  const [redirect, setRedirect] = useState<boolean>(false)

  useEffect(() => {
    getActiveLocation().then(async (res) => {
      console.log("hit")
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
  }, [page])

  return (
    <>
      {appLoading ? (
        <p>Loading...</p>
      ) : redirect ? (
        <Navigate to="/app" />
      ) : (
        <Outlet />
      )}
    </>
  )
}
