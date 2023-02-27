import { PageContext } from "../components/context/PageContext"
import { useContext, useEffect, useState } from "react"
import { logoutUser } from "../requests/logoutUser"
import { Navigate } from "react-router-dom"

export const Logout: React.FC = () => {
  const [redirect, setRedirect] = useState<boolean>(false)

  const runLogout = async () => {
    const res = await logoutUser()
    return res
  }

  useEffect(() => {
    runLogout().then((res) => {
      if (res.status == 200) {
        setRedirect(true)
      }
    })
  }, [])

  return <>{redirect ? <Navigate to="/" /> : <p>Loading...</p>}</>
}
