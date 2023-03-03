import { LoginForm } from "../components/forms/LoginForm"
import { useEffect, useContext } from "react"
import { MasterContext } from "../components/context/MasterContext"

export const LoginPage: React.FC = () => {
  const masterContext = useContext(MasterContext)
  const { setPage } = masterContext

  useEffect(() => {
    setPage("/")
  }, [])

  return (
    <>
      <LoginForm />
    </>
  )
}
