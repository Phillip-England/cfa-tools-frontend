import { LoginForm } from "../components/forms/LoginForm"
import { SignupForm } from "../components/forms/SignupForm"
import { getUser } from "../requests/getUser"
import { useEffect, useContext } from "react"
import { PageContext } from "../context/PageContext"

export const GuestHome: React.FC = () => {
  const pageContext = useContext(PageContext)
  const { setPage } = pageContext

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
