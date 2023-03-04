import { ReactElement } from "react"

type Props = {
  outlet: ReactElement
}

// This component wraps out Outlet component which exists in our layouts
// It's function is to stretch out content to fit the full screen
// That way, if we want to apply a background color for the entire app
// It will be applied to the entire page, not just the area where out
// content exists

export const MainContentWrapper: React.FC<Props> = ({ outlet }) => {
  return (
    <main
      className="flex flex-1 flex-col bg-lightgray"
      style={{ minHeight: "calc(100vh - 4rem)" }}
    >
      {outlet}
    </main>
  )
}
