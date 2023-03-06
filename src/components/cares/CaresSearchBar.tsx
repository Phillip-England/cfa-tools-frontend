import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string | null>>
}

export const CaresSearchBar: React.FC<Props> = ({ setSearch }) => {
  return (
    <div className="ml-2 mr-2 mb-2 flex items-center rounded bg-white shadow-md">
      <input
        className="flex-grow rounded p-2 outline-none"
        type={"text"}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
      />
      <FontAwesomeIcon className="mr-2" icon={faSearch} />
    </div>
  )
}
