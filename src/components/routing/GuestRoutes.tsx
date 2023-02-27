import { User } from "../../types/User"
import { useContext, useEffect, useState } from "react"
import { getUser } from "../../requests/getUser"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
import { PageContext } from "../../context/PageContext"

export const GuestRoutes: React.FC = () => {
  const [redirect, setRedirect] = useState<boolean>(false)
  const authContext = useContext(UserContext)
  const { setUser } = authContext
  const pageContext = useContext(PageContext)
  const { page } = pageContext
  const [loading, setLoading] = useState<boolean>(true)

  const checkAuth = async () => {
    let res = await getUser()
    return res
  }

  useEffect(() => {
    checkAuth().then(async (res) => {
      console.log("running auth")
      if (res.status == 200) {
        setRedirect(true)
      }
      setUser(null)
    })
    setLoading(false)
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
