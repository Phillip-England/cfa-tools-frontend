import { MasterContext } from "../context/MasterContext"
import { useContext, useEffect, useState } from "react"
import { filterCares } from "../../lib/filterCares"
import { CaresItem } from "./CaresItem"
import { Cares } from "../../types/Cares"

type Props = {
  search: string | null
  setSelectedID: React.Dispatch<React.SetStateAction<string | null>>
}

export const CaresList: React.FC<Props> = ({ search, setSelectedID }) => {
  const masterContext = useContext(MasterContext)
  const { cares, limitedCares, setLimitedCares } = masterContext
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
        <div className="ml-2 mr-2 flex flex-col gap-2">
          {filter ? (
            <>
              {filter.map((caresItem) => (
                <CaresItem
                  key={caresItem._id}
                  caresItem={caresItem}
                  setSelectedID={setSelectedID}
                />
              ))}
            </>
          ) : (
            <>
              {cares.map((caresItem) => (
                <CaresItem
                  key={caresItem._id}
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
