import React, { useState, useContext } from "react"
import { Location } from "../../types/Location"
import { MasterContext } from "../context/MasterContext"

export const NewLocationForm: React.FC = () => {
  const masterContext = useContext(MasterContext)
  const { user, setAppLoading, locations, setLocations } = masterContext
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
        let locationsModified: Location[] = []
        let locationsCopy = locations
        setLocations(null)
        const body: RequestBody = {
          name: name,
          number: number,
          _csrf: user?._csrf,
        }
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
        if (locationsCopy != null) {
          for (let x = 0; x < locationsCopy?.length; x++) {
            locationsModified.push(locationsCopy[x])
          }
        }
        locationsModified.push(location)
        setLocations(locationsModified)
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
