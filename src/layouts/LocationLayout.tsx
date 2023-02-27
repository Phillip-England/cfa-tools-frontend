import { Link, Outlet } from "react-router-dom"

export const LocationLayout: React.FC = () => {
  return (
    <>
      <Link to="/location">Home</Link>
      <br></br>
      <Link to="/location/settings">Settings</Link>
      <br></br>
      <Link to="/app">Change Locations</Link>
      <Outlet />
    </>
  )
}
