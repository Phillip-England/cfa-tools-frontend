import React, { useState, useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { Location } from "../../types/Location"

interface Props {
  operations: number
  setOperations: React.Dispatch<React.SetStateAction<number>>
}

export const NewLocationForm: React.FC<Props> = ({
  operations,
  setOperations,
}) => {
  const userContext = useContext(UserContext)
  const { user } = userContext
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")

  interface RequestBody {
    name: string
    number: string
    _csrf: string | undefined
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        const body: RequestBody = {
          name: name,
          number: number,
          _csrf: user?._csrf,
        }
        console.log(body)
        const response = await fetch("http://localhost:8080/location/create", {
          method: "POST",
          credentials: "include",
          body: await JSON.stringify(body),
        })
        const json = await response.json()
        const location: Location = {
          _id: json.data._id,
          user: json.data.user,
          name: json.data.name,
          number: json.data.number,
        }
        let newCount = operations + 1
        setOperations(newCount)
      }}
    >
      <h1>Create a Location</h1>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      <label>Number</label>
      <input
        type="text"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value)
        }}
      />
      <input type="submit" />
    </form>
  )
}
