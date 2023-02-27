import { ActiveLocationContext } from "../context/ActiveLocationContext"
import { useContext, useEffect } from "react"
import { PageContext } from "../context/PageContext"
export const LocationHome: React.FC = () => {
  const activeLocationContext = useContext(ActiveLocationContext)
  const { activeLocation, setActiveLocation } = activeLocationContext
  const pageContext = useContext(PageContext)
  const { setPage } = pageContext

  useEffect(() => {
    setPage("/location")
  })

  return (
    <>
      <h1>Location Home</h1>
      <p>Name: {activeLocation?.name}</p>
      <p>Number: {activeLocation?.number}</p>
    </>
  )
}
