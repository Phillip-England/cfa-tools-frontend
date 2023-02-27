import { Link, Outlet } from "react-router-dom"

export const GuestLayout: React.FC = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <br></br>
      <Outlet />
    </>
  )
}
