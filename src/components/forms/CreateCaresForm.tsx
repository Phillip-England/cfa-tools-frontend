import React, { useState, useContext } from "react"
import { MasterContext } from "../context/MasterContext"
import { Navigate } from "react-router-dom"
import { apiUrl } from "../../lib/apiUrl"

export const CreateCaresForm: React.FC = () => {
  const masterContext = useContext(MasterContext)
  const { user, activeLocation, setCares } = masterContext
  const [guestName, setGuestName] = useState("")
  const [orderNumber, setOrderNumber] = useState("")
  const [incident, setIncident] = useState("")
  const [replacementAction, setReplacementAction] = useState("")
  const [caresID, setCaresID] = useState<string | null>(null)

  interface RequestBody {
    locationID: string | undefined
    guestName: string
    orderNumber: string
    incident: string
    replacementAction: string
    _csrf: string | undefined
  }

  return (
    <form
      className="m-2 flex flex-col rounded bg-white p-6 shadow-md"
      onSubmit={async (e) => {
        e.preventDefault()
        const body: RequestBody = {
          locationID: activeLocation?._id,
          guestName: guestName,
          orderNumber: orderNumber,
          incident: incident,
          replacementAction: replacementAction,
          _csrf: user?._csrf,
        }
        const response = await fetch(apiUrl("/cares/create"), {
          method: "POST",
          credentials: "include",
          body: await JSON.stringify(body),
        })
        const json = await response.json()
        setCares(null)
        setCaresID(json.data._id)
      }}
    >
      {caresID ? <Navigate to={`/cares/view/${caresID}`} /> : null}
      <h1 className="mb-4 font-serif text-lg text-cfared">Create Cares</h1>
      <label className="mb-1 text-sm">Guest Name</label>
      <input
        spellCheck={false}
        className="mb-4 border border-x-0 border-t-0 border-gray-300 py-2 text-xs outline-none focus:border-black"
        type="text"
        value={guestName}
        onChange={(e) => {
          setGuestName(e.target.value)
        }}
      />
      <label className="mb-1 text-sm">Order Number</label>
      <input
        spellCheck={false}
        className="mb-4 border border-x-0 border-t-0 border-gray-300 py-2 text-xs outline-none focus:border-black"
        type="text"
        value={orderNumber}
        onChange={(e) => {
          setOrderNumber(e.target.value)
        }}
      />
      <label className="mb-1 text-sm">Describe the Guest's Experience</label>
      <input
        spellCheck={false}
        type="text"
        className="mb-4 resize-none border border-x-0 border-t-0 border-gray-300 py-2 text-xs outline-none focus:border-black"
        value={incident}
        onChange={(e) => {
          setIncident(e.target.value)
        }}
      />
      <label className="mb-1 text-sm">Follow-Up Action</label>
      <input
        spellCheck={false}
        type="text"
        className="mb-4 resize-none border border-x-0 border-t-0 border-gray-300 py-2 text-xs outline-none focus:border-black"
        value={replacementAction}
        onChange={(e) => {
          setReplacementAction(e.target.value)
        }}
      />
      <input
        className="rounded border bg-cfared p-1 text-sm text-white"
        type="submit"
      />
    </form>
  )
}
