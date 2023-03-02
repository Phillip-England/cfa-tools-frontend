import { MasterContext } from "./context/MasterContext"
import { useContext, useEffect, useState } from "react"
import { filterCares } from "../lib/filterCares"
import { CaresItem } from "./CaresItem"
import { Cares } from "../types/Cares"

type Props = {
  search: string | null
  setSelectedID: React.Dispatch<React.SetStateAction<string | null>>
}

export const CaresList: React.FC<Props> = ({ search, setSelectedID }) => {
  const masterContext = useContext(MasterContext)
  const { cares } = masterContext
  const [filter, setFilter] = useState<null | Cares[]>(null)

  useEffect(() => {
    if (search == null || cares == null) {
      setFilter(null)
      return
    }
    setFilter(filterCares(search, cares))
  }, [search])

  return (
    <>
      {cares ? (
        <div>
          {filter ? (
            <>
              {filter.map((caresItem) => (
                <CaresItem
                  caresItem={caresItem}
                  setSelectedID={setSelectedID}
                />
              ))}
            </>
          ) : (
            <>
              {cares.map((caresItem) => (
                <CaresItem
                  caresItem={caresItem}
                  setSelectedID={setSelectedID}
                />
              ))}
            </>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}
