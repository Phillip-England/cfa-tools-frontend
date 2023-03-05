import { Location } from "../../types/Location"
import { selectLocation } from "../../requests/selectLocation"

type Props = {
  location: Location
  setRedirect: React.Dispatch<React.SetStateAction<boolean>>
  setLoadingLocations: React.Dispatch<React.SetStateAction<boolean>>
  setLocations: React.Dispatch<React.SetStateAction<Location[] | null>>
}

export const LocationItem: React.FC<Props> = ({ location, setRedirect }) => {
  return (
    <div className="flex justify-between rounded border bg-white p-4 shadow-md">
      <div>
        <p className=" text-cfablue">{location.name}</p>
        <p className="text-sm">#{location.number}</p>
      </div>
      <button
        className="ml-4 self-center rounded border bg-white p-2 text-sm text-cfablue"
        onClick={async (e) => {
          const res = await selectLocation(location._id)
          if (res.status == 200) {
            setRedirect(true)
          }
        }}
      >
        Select
      </button>
    </div>
  )
}
