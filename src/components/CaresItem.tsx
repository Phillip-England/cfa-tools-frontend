import { Cares } from "../types/Cares"

type Props = {
  caresItem: Cares
  setSelectedID: React.Dispatch<React.SetStateAction<string | null>>
}

export const CaresItem: React.FC<Props> = ({ caresItem, setSelectedID }) => {
  return (
    <div key={caresItem._id} style={{ border: "solid black 1px" }}>
      <p>Name: {caresItem.guestName}</p>
      <p>Incident: {caresItem.incident}</p>
      <p>Action: {caresItem.replacementAction}</p>
      <p>Code: {caresItem.replacementCode}</p>
      <button
        onClick={() => {
          setSelectedID(caresItem._id)
        }}
      >
        View
      </button>
    </div>
  )
}
