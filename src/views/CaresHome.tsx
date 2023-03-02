import { useEffect, useContext, useState } from "react"
import { MasterContext } from "../components/context/MasterContext"
import { CreateCaresForm } from "../components/forms/CreateCaresForm"
import { CaresList } from "../components/CaresList"
import { CaresSearchBar } from "../components/CaresSearchBar"
import { Navigate } from "react-router-dom"

export const CaresHome: React.FC = () => {
  const masterContext = useContext(MasterContext)
  const { setPage } = masterContext
  const [search, setSearch] = useState<null | string>(null)
  const [selectedID, setSelectedID] = useState<null | string>(null)

  useEffect(() => {
    setPage("/location/cares")
  }, [])

  return (
    <>
      {selectedID ? <Navigate to={`/cares/view/${selectedID}`} /> : null}
      <CreateCaresForm />
      <CaresSearchBar setSearch={setSearch} />
      <CaresList search={search} setSelectedID={setSelectedID} />
    </>
  )
}
