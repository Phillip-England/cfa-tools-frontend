import { Location } from "../../types/Location"
import { selectLocation } from "../../requests/selectLocation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

type Props = {
  location: Location
  setRedirect: React.Dispatch<React.SetStateAction<boolean>>
  setLoadingLocations: React.Dispatch<React.SetStateAction<boolean>>
  setLocations: React.Dispatch<React.SetStateAction<Location[] | null>>
}

export const LocationItem: React.FC<Props> = ({ location, setRedirect }) => {
  return (
    <div
      className="flex justify-between rounded border bg-white p-4 shadow-md"
      onClick={async (e) => {
        const res = await selectLocation(location._id)
        if (res.status == 200) {
          setRedirect(true)
        }
      }}
    >
      <div>
        <p className=" cursor-default font-serif text-cfared">
          {location.name}
        </p>
        <p className="text-sm">#{location.number}</p>
      </div>
      <FontAwesomeIcon
        icon={faArrowRight}
        className="ml-4 self-center bg-white p-2"
      />
    </div>
  )
}
