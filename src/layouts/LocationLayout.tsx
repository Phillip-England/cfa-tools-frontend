import { Link, Outlet } from "react-router-dom"

export const LocationLayout: React.FC = () => {
  return (
    <>
      <Link to="/app">Exit</Link>
      <Outlet />
    </>
  )
}
