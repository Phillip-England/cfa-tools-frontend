import { useContext, useEffect, useState } from "react"
import { getUser } from "../requests/getUser"
import { Navigate, Outlet } from "react-router-dom"
import { MasterContext } from "./MasterContext"

export const GuestRoutes: React.FC = () => {
  const masterContext = useContext(MasterContext)
  const { page, appLoading, setAppLoading, setUser } = masterContext
  const [redirect, setRedirect] = useState<boolean>(false)

  useEffect(() => {
    getUser().then(async (res) => {
      console.log("running auth")
      if (res.status == 200) {
        setRedirect(true)
      }
      setUser(null)
    })
    setAppLoading(false)
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
