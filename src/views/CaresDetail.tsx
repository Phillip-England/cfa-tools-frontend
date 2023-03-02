import { Navigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getSingleCares } from "../requests/getSingleCares"
import { Cares } from "../types/Cares"
import { deleteCares } from "../requests/deleteCares"
import { useContext } from "react"
import { MasterContext } from "../components/context/MasterContext"

export const CaresDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const masterContext = useContext(MasterContext)
  const { setPage, setCares } = masterContext
  const [redirect, setRedirect] = useState(false)
  const [currentCares, setCurrentCares] = useState<Cares | null>(null)

  useEffect(() => {
    setPage(`/cares/view/${id}`)
    if (id == undefined) {
      setRedirect(true)
      return
    }
    getSingleCares(id).then(async (res) => {
      if (res.status != 200) {
        setRedirect(true)
      }
      const json = await res.json()
      console.log(json.data)
      const cares: Cares = {
        _id: json.data._id,
        location: json.data.location,
        user: json.data.user,
        guestName: json.data.guestName,
        incident: json.data.incidnet,
        orderNumber: json.data.orderNumber,
        replacementAction: json.data.replacementAction,
        replacementCode: json.data.replacementCodeString,
      }
      setCurrentCares(cares)
    })
  }, [])

  return (
    <>
      {redirect ? <Navigate to="/cares" /> : null}
      {currentCares ? (
        <div>
          <p>{currentCares.guestName}</p>
          <p>{currentCares.orderNumber}</p>
          <p>{currentCares.incident}</p>
          <p>{currentCares.replacementAction}</p>
          <p>{currentCares.replacementCode}</p>
          <button
            onClick={async () => {
              if (id == undefined) {
                return
              }
              const res = await deleteCares(id)
              setCares(null)
              setRedirect(true)
            }}
          >
            Delete
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}
