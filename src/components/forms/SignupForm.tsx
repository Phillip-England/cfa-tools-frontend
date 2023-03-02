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
      className="m-4 flex flex-col rounded bg-white p-4"
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
      <h1 className="mb-4 text-lg">Signup</h1>
      <label className="text-sm">Email</label>
      <input
        className="mb-2"
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />
      <label className="text-sm">Password</label>
      <input
        className="mb-4"
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />
      <input
        className="text-md rounded border border-solid border-black p-2"
        type="submit"
      />
    </form>
  )
}
