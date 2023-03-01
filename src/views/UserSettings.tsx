import { useContext, useEffect } from "react"
import { MasterContext } from "../components/context/MasterContext"

export const UserSettings: React.FC = () => {
  const masterContext = useContext(MasterContext)
  const { setPage } = masterContext

  useEffect(() => {
    setPage("/app/settings")
  }, [])

  return <h1>User Settings</h1>
}
