import { useContext, useEffect } from "react"
import { MasterContext } from "../components/MasterContext"
export const LocationHome: React.FC = () => {
  const masterContext = useContext(MasterContext)
  const { setPage, activeLocation } = masterContext

  useEffect(() => {
    setPage("/location")
  }, [])

  return (
    <>
      <h1>{activeLocation?.name}</h1>
      <h1>#{activeLocation?.number}</h1>
    </>
  )
}
