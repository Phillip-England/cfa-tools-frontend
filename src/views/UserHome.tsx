import { useContext, useEffect, useState } from "react"
import { PageContext } from "../context/PageContext"
import { UserContext } from "../context/UserContext"
import { getLocations } from "../requests/getLocations"
import { Location } from "../types/Location"
import { Link, Navigate } from "react-router-dom"
import { selectLocation } from "../requests/selectLocation"
import { dropActiveLocation } from "../requests/dropActiveLocation"
import { ActiveLocationContext } from "../context/ActiveLocationContext"

export const UserHome: React.FC = () => {
  const userContext = useContext(UserContext)
  const { user } = userContext
  const pageContext = useContext(PageContext)
  const { page, setPage } = pageContext
  const activeLocationContext = useContext(ActiveLocationContext)
  const { setActiveLocation } = activeLocationContext
  const [locations, setLocations] = useState<Location[] | null>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [redirect, setRedirect] = useState<boolean>(false)

  useEffect(() => {
    setPage("/app")
    getLocations().then(async (res) => {
      console.log("loading locations")
      let result = await res.json()
      let locations: Location[] = []
      if (result.data.length > 0) {
        for (let x = 0; x < result.data.length; x++) {
          let location: Location = {
            _id: result.data[x]._id,
            user: result.data[x].user,
            name: result.data[x].name,
            number: result.data[x].number,
          }
          locations.push(location)
        }
      }
      setLocations(locations)
    })
    dropActiveLocation()
    setLoading(false)
  }, [page])

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {redirect ? <Navigate to="/location" /> : null}
          <h1>User Home</h1>
          <p>{user?.email}</p>
          <div>
            {locations?.map((location) => (
              <button
                key={location._id}
                onClick={async (e) => {
                  const res = await selectLocation(location._id)
                  if (res.status == 200) {
                    setRedirect(true)
                  }
                }}
              >
                <p>Name: {location.name}</p>
                <p>Store Number: {location.number}</p>
              </button>
            ))}
          </div>
        </>
      )}
    </>
  )
}
