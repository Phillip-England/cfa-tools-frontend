import { useContext, useEffect, useState } from "react"
import { deleteLocation } from "../requests/deleteLocation"
import { Navigate } from "react-router-dom"
import { MasterContext } from "../components/context/MasterContext"

export const LocationSettings: React.FC = () => {
  const masterContext = useContext(MasterContext)
  const { setPage, activeLocation, setLocations } = masterContext
  const [redirect, setRedirect] = useState<boolean>(false)

  useEffect(() => {
    setPage("/location/settings")
  }, [])

  return (
    <>
      {redirect ? <Navigate to="/app/locations" /> : null}
      <h1>Location Settings</h1>
      <button
        onClick={async (e) => {
          if (activeLocation != null) {
            let res = await deleteLocation(activeLocation._id)
            if (res.status == 200) {
              setRedirect(true)
            }
            setLocations(null)
          }
        }}
      >
        Delete Location
      </button>
    </>
  )
}
