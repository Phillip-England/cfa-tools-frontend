import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Cares } from "../../types/Cares"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

type Props = {
  caresItem: Cares
  setSelectedID: React.Dispatch<React.SetStateAction<string | null>>
}

export const CaresItem: React.FC<Props> = ({ caresItem, setSelectedID }) => {
  return (
    <div
      onClick={() => {
        setSelectedID(caresItem._id)
      }}
      className="flex flex-1 flex-col rounded bg-white p-2 shadow-md"
    >
      <div className="flex flex-1 items-center justify-between border-b">
        <p className="p-2 font-serif text-cfared">{caresItem.guestName}</p>
        <FontAwesomeIcon icon={faArrowRight} className="mr-3" />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-1 flex-col">
          <p className="border-b p-2 text-xs">
            <span className="mr-2 font-semibold">Incident:</span>
            {caresItem.incident}
          </p>
          <p className="border-b p-2 text-xs">
            <span className="mr-2 font-semibold">Action:</span>
            {caresItem.replacementAction}
          </p>
          <p className="p-2 text-xs">
            <span className="mr-2 font-semibold">Code:</span>
            {caresItem.replacementCode}
          </p>
        </div>
      </div>
    </div>
  )
}
