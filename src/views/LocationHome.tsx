import { useContext, useEffect } from "react"
import { MasterContext } from "../components/MasterContext"
import { Link } from "react-router-dom"
export const LocationHome: React.FC = () => {
  const masterContext = useContext(MasterContext)
  const { setPage, activeLocation } = masterContext

  useEffect(() => {
    setPage("/location")
  }, [])

  return (
    <>
      {activeLocation ? (
        <>
          <h1>{activeLocation?.name}</h1>
          <h1>#{activeLocation?.number}</h1>
          <Link to="/cares">
            <h2>Cares</h2>
          </Link>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}
