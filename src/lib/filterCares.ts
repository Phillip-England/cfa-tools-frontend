import { Cares } from "../types/Cares"

export const filterCares = (search: string, cares: Cares[]) => {
  let filtered: Cares[] = []

  cares.map((care) => {
    let match: boolean = false

    for (const key in care) {
      if (key == "_id" || key == "location" || key == "user") {
        continue
      }
      const value = care[key as keyof typeof care].toLowerCase()
      if (value.includes(search.toLowerCase())) {
        match = true
        break
      }
    }

    if (match) {
      filtered.push(care)
    }
  })

  return filtered
}
