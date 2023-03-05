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
            <h1 className=" font-serif text-cfared">{activeLocation?.name}</h1>
            <p className="text-xs">#{activeLocation?.number}</p>
          </div>
          <div className="ml-2 mr-2 rounded">
            <div className="rounded bg-white p-4 shadow-md">
              <Link
                to="/cares/create"
                className="flex items-center justify-between"
              >
                <div>
                  <h2 className="font-serif text-cfared">Cares Log</h2>
                  <p className="text-xs">
                    Track your guest experiences and plan resolutions to ammend
                    mistakes
                  </p>
                </div>
                <FontAwesomeIcon
                  icon={faFileShield}
                  className="ml-4 text-cfared"
                />
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
