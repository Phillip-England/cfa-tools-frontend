import { useEffect, useContext, useState } from "react"
import { MasterContext } from "../components/context/MasterContext"
import { CreateCaresForm } from "../components/forms/CreateCaresForm"
import { CaresList } from "../components/CaresList"

export const CaresHome: React.FC = () => {
  const masterContext = useContext(MasterContext)
  const { setPage } = masterContext

  useEffect(() => {
    setPage("/location/cares")
  }, [])

  return (
    <>
      <CreateCaresForm />
      <CaresList />
    </>
  )
}
