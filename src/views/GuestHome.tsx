import { LoginForm } from "../components/forms/LoginForm"
import { SignupForm } from "../components/forms/SignupForm"
import { getUser } from "../requests/getUser"
import { useEffect, useContext } from "react"
import { MasterContext } from "../components/MasterContext"

export const GuestHome: React.FC = () => {
  const masterContext = useContext(MasterContext)
  const { setPage } = masterContext

  useEffect(() => {
    setPage("/")
  }, [])

  return (
    <>
      <SignupForm />
      <LoginForm />
    </>
  )
}
