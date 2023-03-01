import { MasterContext } from "./context/MasterContext"
import { useContext, useEffect, useState } from "react"
import { deleteCares } from "../requests/deleteCares"
import { Navigate } from "react-router-dom"

export const CaresList: React.FC = () => {
  const masterContext = useContext(MasterContext)
  const { page, cares, setCares } = masterContext
  const [id, setID] = useState<null | string>(null)

  return (
    <>
      {id ? <Navigate to={`/cares/view/${id}`} /> : null}
      {cares ? (
        <div>
          {cares.map((care) => (
            <div key={care._id} style={{ border: "solid black 1px" }}>
              <p>Name: {care.guestName}</p>
              <p>Incident: {care.incident}</p>
              <p>Action: {care.replacementAction}</p>
              <p>Code: {care.replacementCode}</p>
              <button
                onClick={() => {
                  setID(care._id)
                }}
              >
                View
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}
