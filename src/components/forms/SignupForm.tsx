import { useState } from "react"
import { FormError } from "../formComponents/FormError"
import { FormLoader } from "../formComponents/FormLoader"
import { apiUrl } from "../../lib/apiUrl"

export const SignupForm: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [err, setErr] = useState("")
  const [loading, setLoading] = useState(false)

  interface RequestBody {
    email: string
    password: string
    confirmPassword: string
  }

  return (
    <form
      className="m-2 flex flex-col rounded bg-white p-6 shadow-md"
      onSubmit={async (e) => {
        setErr("")
        setLoading(true)
        e.preventDefault()
        const body: RequestBody = {
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        }
        const response = await fetch(apiUrl("/user/create"), {
          method: "POST",
          body: await JSON.stringify(body),
        })
        const json = await response.json()
        if (response.status == 400) {
          setErr(json.message)
        }
        setLoading(false)
      }}
    >
      <h1 className="mb-4 text-lg">Sign Up</h1>
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
        className="mb-4 border border-x-0 border-t-0 border-gray-300 outline-none focus:border-black"
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />
      <label className="mb-1 text-xs">Confirm Password</label>
      <input
        className="mb-8 border border-x-0 border-t-0 border-gray-300 outline-none focus:border-black"
        type="text"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value)
        }}
      />
      {loading ? (
        <div className="flex justify-center">
          <FormLoader />
        </div>
      ) : (
        <input
          className="rounded border bg-cfared p-1 text-sm text-white"
          type="submit"
        />
      )}
    </form>
  )
}
