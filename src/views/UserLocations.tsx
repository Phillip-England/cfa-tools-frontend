import { useContext, useEffect, useState } from "react"
import { getLocations } from "../requests/getLocations"
import { Location } from "../types/Location"
import { Navigate } from "react-router-dom"
import { selectLocation } from "../requests/selectLocation"
import { NewLocationForm } from "../components/forms/NewLocationForm"
import { deleteLocation } from "../requests/deleteLocation"
import { MasterContext } from "../components/context/MasterContext"
import { LocationsList } from "../components/locations/LocationsList"
import { LocationListSkeleton } from "../components/locations/LocationListSkeleton"

export const UserLocations: React.FC = () => {
  const masterContext = useContext(MasterContext)
  const { user, setPage, locations, setLocations } = masterContext
  const [loadingLocations, setLoadingLocations] = useState<boolean>(true)
  const [redirect, setRedirect] = useState<boolean>(false)

  useEffect(() => {
    setPage("/app/locations")
    // only make the api call for locations if we dont have any
    if (locations == null) {
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
          setLocations(null)
        }
        setLoadingLocations(false)
      })
    } else {
      setLoadingLocations(false)
    }
  }, [locations])

  return (
    <>
      <>
        {redirect ? <Navigate to="/location/tools" /> : null}
        <NewLocationForm />
        {loadingLocations ? (
          <LocationListSkeleton />
        ) : (
          <LocationsList
            setLoadingLocations={setLoadingLocations}
            setRedirect={setRedirect}
          />
        )}
      </>
    </>
  )
}
