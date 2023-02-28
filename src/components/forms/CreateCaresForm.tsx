import React, { useState, useContext } from "react"
import { Location } from "../../types/Location"
import { MasterContext } from "../MasterContext"

interface Props {
  setReplacementCode: React.Dispatch<React.SetStateAction<string | null>>
}

export const CreateCaresForm: React.FC<Props> = ({ setReplacementCode }) => {
  const masterContext = useContext(MasterContext)
  const { user, setAppLoading, activeLocation } = masterContext
  const [guestName, setGuestName] = useState("")
  const [orderNumber, setOrderNumber] = useState("")
  const [incident, setIncident] = useState("")
  const [replacementAction, setReplacementAction] = useState("")

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
        console.log(body)
        const response = await fetch("http://localhost:8080/cares/create", {
          method: "POST",
          credentials: "include",
          body: await JSON.stringify(body),
        })
        const json = await response.json()
        setReplacementCode(json.data.replacementCodeString)
        console.log(json)
      }}
    >
      <h1>Create Cares</h1>
      <label>Guest Name</label>
      <input
        type="text"
        value={guestName}
        onChange={(e) => {
          setGuestName(e.target.value)
        }}
      />
      <label>Order Number</label>
      <input
        type="text"
        value={orderNumber}
        onChange={(e) => {
          setOrderNumber(e.target.value)
        }}
      />
      <label>Describe the Guest's Experience</label>
      <textarea
        value={incident}
        onChange={(e) => {
          setIncident(e.target.value)
        }}
      />
      <label>Follow-Up Action</label>
      <textarea
        value={replacementAction}
        onChange={(e) => {
          setReplacementAction(e.target.value)
        }}
      />
      <input type="submit" />
    </form>
  )
}