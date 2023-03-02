type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string | null>>
}

export const CaresSearchBar: React.FC<Props> = ({ setSearch }) => {
  return (
    <>
      <input
        type={"text"}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
      />
    </>
  )
}
