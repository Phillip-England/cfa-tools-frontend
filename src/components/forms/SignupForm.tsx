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
        const data = await response.json()
        console.log(data)
      }}
    >
      <h1>Signup</h1>
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
  )
}
