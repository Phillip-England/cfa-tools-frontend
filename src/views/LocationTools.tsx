import { useContext, useEffect } from "react"
import { MasterContext } from "../components/context/MasterContext"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileShield } from "@fortawesome/free-solid-svg-icons"

export const LocationTools: React.FC = () => {
  const masterContext = useContext(MasterContext)
  const { setPage, activeLocation } = masterContext

  useEffect(() => {
    setPage("/location")
  }, [])

  return (
    <>
      {activeLocation ? (
        <>
          <div className="m-2 rounded bg-white p-4 shadow-md">
            <h1 className=" text-cfablue">{activeLocation?.name}</h1>
            <p className="text-sm">#{activeLocation?.number}</p>
          </div>
          <div className="ml-2 mr-2 rounded">
            <div className="rounded bg-white p-4 shadow-md">
              <Link
                to="/cares/create"
                className="flex items-center justify-between"
              >
                <h2 className="">Cares Log</h2>
                <FontAwesomeIcon icon={faFileShield} className="text-cfablue" />
              </Link>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}
