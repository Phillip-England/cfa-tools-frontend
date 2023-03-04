import { useState } from "react"

export const SignupForm: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  interface RequestBody {
    email: string
    password: string
  }

  return (
    <form
      className="m-2 flex flex-col rounded bg-white p-6"
      onSubmit={async (e) => {
        e.preventDefault()
        const body: RequestBody = {
          email: email,
          password: password,
        }
        const response = await fetch("http://localhost:8080/user/create", {
          method: "POST",
          body: await JSON.stringify(body),
        })
        const json = await response.json()
        console.log(json)
      }}
    >
      <h1 className="mb-4 text-lg">Sign Up</h1>
      <label className="mb-1 text-xs">Email</label>
      <input
        className="mb-4 border border-x-0 border-t-0 border-gray-300 outline-none focus:border-cfared"
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />
      <label className="mb-1 text-xs">Password</label>
      <input
        className="mb-8 border border-x-0 border-t-0 border-gray-300 outline-none focus:border-cfared"
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />
      <input
        className="rounded border bg-cfared p-1 text-sm text-white"
        type="submit"
      />
    </form>
  )
}
