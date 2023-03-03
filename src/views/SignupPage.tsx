import { LoginForm } from "../components/forms/LoginForm"
import { useEffect, useContext } from "react"
import { MasterContext } from "../components/context/MasterContext"
import { SignupForm } from "../components/forms/SignupForm"

export const SignupPage: React.FC = () => {
  const masterContext = useContext(MasterContext)
  const { setPage } = masterContext

  useEffect(() => {
    setPage("/")
  }, [])

  return (
    <>
      <SignupForm />
    </>
  )
}
