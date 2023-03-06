import { useContext, useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { MasterContext } from "../context/MasterContext"
import { getAllCares } from "../../requests/getAllCares"
import { Cares } from "../../types/Cares"

/*
This wrapper helps to ensure we always have a list of up to date cares
This should be found under "LocationRoutes" because all cares must be
associated with a location
*/

export const CaresRoutes: React.FC = () => {
  const masterContext = useContext(MasterContext)
  const { cares, setCares, caresStartRange, caresEndRange, limitedCares } =
    masterContext
  const [redirect, setRedirect] = useState<boolean>(false)

  useEffect(() => {
    if (cares != null) {
      return
    }
    getAllCares().then(async (res) => {
      if (res.status !== 200) {
        setRedirect(true)
      }
      const json = await res.json()
      let caresArray: Cares[] = []
      if (json.data == null) {
        setCares([])
        return
      }
      for (let x = 0; x < json.data.length; x++) {
        let cares: Cares = {
          _id: json.data[x]._id,
          location: json.data[x].location,
          user: json.data[x].user,
          guestName: json.data[x].guestName,
          orderNumber: json.data[x].orderNumber,
          incident: json.data[x].incident,
          replacementAction: json.data[x].replacementAction,
          replacementCode: json.data[x].replacementCodeString,
        }
        caresArray.push(cares)
      }
      caresArray.reverse()
      setCares(caresArray)
    })
  }, [cares])

  return <>{redirect ? <Navigate to="/app/locations" /> : <Outlet />}</>
}
