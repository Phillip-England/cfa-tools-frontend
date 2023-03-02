import { Link, Outlet } from "react-router-dom"

export const CaresLayout: React.FC = () => {
  return (
    <>
      <Link to="/cares">Create Cares</Link>
      <br></br>
      <Link to="/location">Tools</Link>
      <br></br>
      <Link to="/app/logout">Logout</Link>
      <Outlet />
    </>
  )
}
