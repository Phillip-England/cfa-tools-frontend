import { Link, Outlet } from "react-router-dom"

export const UserLayout: React.FC = () => {
  return (
    <>
      <Link to="/app">Home</Link>
      <br></br>
      <Link to="/app/settings">Settings</Link>
      <br></br>
      <Link to="/app/logout">Logout</Link>
      <Outlet />
    </>
  )
}
