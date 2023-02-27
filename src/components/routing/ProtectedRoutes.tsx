import { User } from "../../types/User"
import { useContext, useEffect, useState } from "react"
import { getUser } from "../../requests/getUser"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
import { PageContext } from "../../context/PageContext"

export const ProtectedRoutes: React.FC = () => {
  const [redirect, setRedirect] = useState<boolean>(false)
  const authContext = useContext(UserContext)
  const { setUser } = authContext
  const pageContext = useContext(PageContext)
  const { page } = pageContext
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    getUser().then(async (res) => {
      console.log("running auth")
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
      setLoading(false)
    })
  }, [page])

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : redirect ? (
        <Navigate to="/" />
      ) : (
        <Outlet />
      )}
    </>
  )
}
