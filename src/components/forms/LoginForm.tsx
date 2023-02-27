import { useState } from "react"
import { Navigate } from "react-router-dom"

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("phillip@gmail.com")
  const [password, setPassword] = useState("newpassword")
  const [navigate, setNavigate] = useState(false)

  interface RequestBody {
    email: string
    password: string
  }

  return (
    <>
      {navigate ? <Navigate to="/app" /> : null}
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          const body: RequestBody = {
            email: email,
            password: password,
          }
          const response = await fetch("http://localhost:8080/user/login", {
            method: "POST",
            credentials: "include",
            body: await JSON.stringify(body),
          })
          if (response.status == 200) {
            setNavigate(true)
          }
        }}
      >
        <h1>Login</h1>
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <label>Password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <input type="submit" />
      </form>
    </>
  )
}
