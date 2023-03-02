import { Link, Outlet } from "react-router-dom"

export const LocationLayout: React.FC = () => {
  return (
    <>
      <Link to="/location">Tools</Link>
      <br></br>
      <Link to="/location/settings">Settings</Link>
      <br></br>
      <Link to="/app">Change Locations</Link>
      <br></br>
      <Link to="/app/logout">Logout</Link>

      <Outlet />
    </>
  )
}
