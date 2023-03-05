import React, { useState, useContext } from "react"
import { Location } from "../../types/Location"
import { MasterContext } from "../context/MasterContext"
import { apiUrl } from "../../lib/apiUrl"

export const NewLocationForm: React.FC = () => {
  const masterContext = useContext(MasterContext)
  const { user, locations, setLocations } = masterContext
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")

  interface RequestBody {
    name: string
    number: string
    _csrf: string | undefined
  }

  return (
    <form
      className="m-2 flex flex-col rounded bg-white p-6 shadow-md"
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
        const response = await fetch(apiUrl("/location/create"), {
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
      <h1 className="mb-4 text-lg">Create a Location</h1>
      <label className="mb-1 text-xs">Name</label>
      <input
        className="mb-4 border border-x-0 border-t-0 border-gray-300 outline-none focus:border-black"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      <label className="mb-1 text-xs">Number</label>
      <input
        className="mb-8 border border-x-0 border-t-0 border-gray-300 outline-none focus:border-black"
        type="text"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value)
        }}
      />
      <input
        className="rounded border bg-cfared p-1 text-sm text-white"
        type="submit"
      />
    </form>
  )
}
