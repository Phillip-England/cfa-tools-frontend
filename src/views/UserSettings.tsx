import { useContext, useEffect } from "react"
import { PageContext } from "../context/PageContext"

export const UserSettings: React.FC = () => {
  const pageContext = useContext(PageContext)
  const { page, setPage } = pageContext

  useEffect(() => {
    setPage("/app/settings")
  }, [])

  return <h1>User Settings</h1>
}
