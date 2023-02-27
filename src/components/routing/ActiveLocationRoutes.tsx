import { User } from "../../types/User"
import { useContext, useEffect, useState } from "react"
import { getUser } from "../../requests/getUser"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
import { PageContext } from "../../context/PageContext"
import { getActiveLocation } from "../../requests/getActiveLocation"
import { ActiveLocationContext } from "../../context/ActiveLocationContext"
import { Location } from "../../types/Location"

export const ActiveLocationRoutes: React.FC = () => {
  const [redirect, setRedirect] = useState<boolean>(false)
  const pageContext = useContext(PageContext)
  const { page } = pageContext
  const activeLocationContext = useContext(ActiveLocationContext)
  const { setActiveLocation } = activeLocationContext
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    getActiveLocation().then(async (res) => {
      console.log("getting active location")
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
      setLoading(false)
    })
  }, [page])

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : redirect ? (
        <Navigate to="/app" />
      ) : (
        <Outlet />
      )}
    </>
  )
}
