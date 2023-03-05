import { useContext, useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { MasterContext } from "../context/MasterContext"

export const GuestRoutes: React.FC = () => {
  const masterContext = useContext(MasterContext)
  const { setPage, user } = masterContext
  const [redirect, setRedirect] = useState<boolean>(false)

  useEffect(() => {
    setPage("/app/logout")
    if (user !== null) {
      setRedirect(true)
    }
  }, [])

  return <>{redirect ? <Navigate to="/app/locations" /> : <Outlet />}</>
}
