import { useContext, useEffect, useState } from "react"
import { logoutUser } from "../requests/logoutUser"
import { Navigate } from "react-router-dom"
import { MasterContext } from "../components/context/MasterContext"

export const Logout: React.FC = () => {
  const [redirect, setRedirect] = useState<boolean>(false)
  const masterContext = useContext(MasterContext)
  const { page, setUser, setLocations, user } = masterContext

  useEffect(() => {
    logoutUser().then((res) => {
      if (res.status == 200) {
        setRedirect(true)
        setUser(null)
        setLocations(null)
      }
    })
  }, [])

  return <>{redirect ? <Navigate to="/login" /> : <p>Loading...</p>}</>
}
