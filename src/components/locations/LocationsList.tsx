import { deleteLocation } from "../../requests/deleteLocation"
import { MasterContext } from "../context/MasterContext"
import { useContext } from "react"
import { selectLocation } from "../../requests/selectLocation"
import { LocationItem } from "./LocationItem"
type Props = {
  setLoadingLocations: React.Dispatch<React.SetStateAction<boolean>>
  setRedirect: React.Dispatch<React.SetStateAction<boolean>>
}

export const LocationsList: React.FC<Props> = ({
  setLoadingLocations,
  setRedirect,
}) => {
  const masterContext = useContext(MasterContext)
  const { locations, setLocations } = masterContext

  return (
    <>
      <div className="ml-2 mr-2 mb-2 flex flex-col gap-2">
        {locations?.map((location) => (
          <LocationItem
            key={location._id}
            location={location}
            setRedirect={setRedirect}
            setLoadingLocations={setLoadingLocations}
            setLocations={setLocations}
          />
        ))}
      </div>
    </>
  )
}
