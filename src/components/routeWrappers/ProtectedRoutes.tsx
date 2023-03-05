import { User } from "../../types/User"
import { useContext, useEffect, useState } from "react"
import { getUser } from "../../requests/getUser"
import { Navigate, Outlet } from "react-router-dom"
import { MasterContext } from "../context/MasterContext"

export const ProtectedRoutes: React.FC = () => {
  const masterContext = useContext(MasterContext)
  const { page, setUser } = masterContext
  const [redirect, setRedirect] = useState<boolean>(false)

  useEffect(() => {
    getUser().then(async (res) => {
      if (res.status !== 200) {
        setRedirect(true)
      }
      let json = await res.json()
      let user: User = {
        _id: json.data._id,
        email: json.data.email,
        _csrf: json._csrf,
      }
      setUser(user)
    })
  }, [page])

  return <>{redirect ? <Navigate to="/login" /> : <Outlet />}</>
}
