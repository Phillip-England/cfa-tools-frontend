import { useContext, useEffect, useState } from "react"
import { PageContext } from "../context/PageContext"
import { UserContext } from "../context/UserContext"
import { getLocations } from "../requests/getLocations"
import { Location } from "../types/Location"
import { Navigate } from "react-router-dom"
import { selectLocation } from "../requests/selectLocation"
import { dropActiveLocation } from "../requests/dropActiveLocation"
import { NewLocationForm } from "../components/forms/NewLocationForm"
import { deleteLocation } from "../requests/deleteLocation"

export const UserHome: React.FC = () => {
  const userContext = useContext(UserContext)
  const { user } = userContext
  const pageContext = useContext(PageContext)
  const { setPage } = pageContext
  const [locations, setLocations] = useState<Location[] | null>(null)
  const [loadingLocations, setLoadingLocations] = useState<boolean>(true)
  const [redirect, setRedirect] = useState<boolean>(false)
  const [operations, setOperations] = useState<number>(0)

  useEffect(() => {
    setPage("/app")
    getLocations().then(async (res) => {
      let result = await res.json()
      let locations: Location[] = []
      if (result.data != null) {
        for (let x = 0; x < result.data.length; x++) {
          let location: Location = {
            _id: result.data[x]._id,
            user: result.data[x].user,
            name: result.data[x].name,
            number: result.data[x].number,
          }
          locations.push(location)
        }
        setLocations(locations)
      } else {
        setLocations([])
      }
      setLoadingLocations(false)
    })
    dropActiveLocation()
  }, [operations])

  return (
    <>
      <>
        {redirect ? <Navigate to="/location" /> : null}
        <NewLocationForm
          operations={operations}
          setOperations={setOperations}
        />
        {loadingLocations ? (
          <p>Loading...</p>
        ) : (
          <div>
            {locations?.map((location) => (
              <div style={{ border: "solid black 1px" }} key={location._id}>
                <p>Name: {location.name}</p>
                <p>Store Number: {location.number}</p>
                <button
                  onClick={async (e) => {
                    setLoadingLocations(true)
                    let res = await deleteLocation(location._id)
                    if (res.status == 200) {
                      let newCount = operations + 1
                      setOperations(newCount)
                    }
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={async (e) => {
                    setLoadingLocations(true)
                    const res = await selectLocation(location._id)
                    if (res.status == 200) {
                      setRedirect(true)
                    }
                  }}
                >
                  Select
                </button>
              </div>
            ))}
          </div>
        )}
      </>
    </>
  )
}
