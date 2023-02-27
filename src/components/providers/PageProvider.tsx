import { useState } from "react"
import { PageContext } from "../../context/PageContext"

export const PageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [page, setPage] = useState<null | string>(null)

  return (
    <>
      <PageContext.Provider value={{ page, setPage }}>
        {children}
      </PageContext.Provider>
    </>
  )
}
