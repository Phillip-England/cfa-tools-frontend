import { Link, Outlet } from "react-router-dom"

export const CaresLayout: React.FC = () => {
  return (
    <>
      <Link to="/location">Location Home</Link>
      <br></br>
      <Outlet />
    </>
  )
}
