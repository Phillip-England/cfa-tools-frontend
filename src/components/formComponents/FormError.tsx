import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"

type Props = {
  err: string
}

export const FormError: React.FC<Props> = ({ err }) => {
  return (
    <div className=" mb-4 flex w-full items-center rounded border p-1">
      <FontAwesomeIcon
        icon={faExclamationCircle}
        className="rounded p-2 text-cfared"
      />
      <p className="pl-2 text-sm">{err}</p>
    </div>
  )
}
