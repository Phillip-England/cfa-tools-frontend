import { useContext, useEffect, useState } from "react"
import { getUser } from "../../requests/getUser"
import { Navigate, Outlet } from "react-router-dom"
import { MasterContext } from "../MasterContext"

export const GuestRoutes: React.FC = () => {
  const masterContext = useContext(MasterContext)
  const { page, setUser, setLocations } = masterContext
  const [redirect, setRedirect] = useState<boolean>(false)

  useEffect(() => {
    // dropping all logged in resources
    setLocations(null)
    // checking for user, redirecting if we find one
    getUser().then(async (res) => {
      if (res.status == 200) {
        setRedirect(true)
      }
      setUser(null)
    })
  }, [page])

  return <>{redirect ? <Navigate to="/app" /> : <Outlet />}</>
}
