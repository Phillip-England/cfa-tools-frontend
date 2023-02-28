import { useEffect, useContext, useState } from "react"
import { MasterContext } from "../components/MasterContext"
import { CreateCaresForm } from "../components/forms/CreateCaresForm"

export const CaresHome: React.FC = () => {
  const masterContext = useContext(MasterContext)
  const { setPage } = masterContext
  const [replacementCode, setReplacementCode] = useState<null | string>(null)

  useEffect(() => {
    setPage("/location/cares")
  }, [])

  return (
    <>
      <CreateCaresForm setReplacementCode={setReplacementCode} />
      {replacementCode ? (
        <>
          <p>Guest Referrence Number</p>
          <p>{replacementCode}</p>
        </>
      ) : null}
    </>
  )
}
