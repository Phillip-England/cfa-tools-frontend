import { useState } from "react"
import { Navigate } from "react-router-dom"

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [navigate, setNavigate] = useState(false)

  interface RequestBody {
    email: string
    password: string
  }

  return (
    <>
      {navigate ? <Navigate to="/app" /> : null}
      <form
        className="m-4 flex flex-col bg-white p-4"
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
        <h1 className="mb-4 text-lg">Log In</h1>
        <label className="mb-1 text-xs">Email</label>
        <input
          className="mb-4 border border-x-0 border-t-0 border-gray-300 outline-none focus:border-black"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <label className="mb-1 text-xs">Password</label>
        <input
          className="mb-4 border border-x-0 border-t-0 border-gray-300 outline-none focus:border-black"
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <input className=" bg-cfared p-1 text-sm text-white" type="submit" />
      </form>
    </>
  )
}
