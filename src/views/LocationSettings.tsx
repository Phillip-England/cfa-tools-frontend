import { useContext, useEffect, useState } from "react"
import { deleteLocation } from "../requests/deleteLocation"
import { Navigate } from "react-router-dom"
import { MasterContext } from "../components/MasterContext"

export const LocationSettings: React.FC = () => {
  const masterContext = useContext(MasterContext)
  const { setPage, activeLocation } = masterContext
  const [redirect, setRedirect] = useState<boolean>(false)

  useEffect(() => {
    setPage("/location/settings")
  }, [])

  return (
    <>
      {redirect ? <Navigate to="/app" /> : null}
      <h1>Location Settings</h1>
      <button
        onClick={async (e) => {
          if (activeLocation != null) {
            let res = await deleteLocation(activeLocation._id)
            if (res.status == 200) {
              setRedirect(true)
            }
          }
        }}
      >
        Delete Location
      </button>
    </>
  )
}