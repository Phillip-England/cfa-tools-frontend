import { useState } from "react"
import { Navigate } from "react-router-dom"
import { FormError } from "../formComponents/FormError"
import { FormLoader } from "../formComponents/FormLoader"
import { apiUrl } from "../../lib/apiUrl"

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("a@gmail.com")
  const [password, setPassword] = useState("password")
  const [navigate, setNavigate] = useState(false)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState("")

  interface RequestBody {
    email: string
    password: string
  }

  return (
    <>
      {navigate ? <Navigate to="/app/locations" /> : null}
      <form
        className="m-2 flex flex-col rounded bg-white p-6 shadow-md"
        onSubmit={async (e) => {
          setErr("")
          setLoading(true)
          e.preventDefault()
          const body: RequestBody = {
            email: email,
            password: password,
          }
          const response = await fetch(apiUrl("/user/login"), {
            method: "POST",
            credentials: "include",
            body: await JSON.stringify(body),
          })
          if (response.status == 200) {
            setNavigate(true)
          }
          if (response.status == 400) {
            const json = await response.json()
            setErr(json.message)
          }
          setLoading(false)
        }}
      >
        <h1 className="mb-4 text-lg">Log In</h1>
        {err ? <FormError err={err} /> : null}
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
          className="mb-8 border border-x-0 border-t-0 border-gray-300 outline-none focus:border-black"
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        {loading ? (
          <div className="flex justify-center">
            <FormLoader />
          </div>
        ) : (
          <input
            className="rounded border bg-cfablue p-1 text-sm text-white"
            type="submit"
          />
        )}
      </form>
    </>
  )
}
