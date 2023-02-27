import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GuestHome } from "./views/GuestHome"
import { UserHome } from "./views/UserHome"
import { ProtectedRoutes } from "./components/ProtectedRoutes"
import { GuestRoutes } from "./components/GuestRoutes"
import { Logout } from "./views/Logout"
import { UserLayout } from "./layouts/UserLayout"
import { UserSettings } from "./views/UserSettings"
import { LocationHome } from "./views/LocationHome"
import { LocationLayout } from "./layouts/LocationLayout"
import { ActiveLocationRoutes } from "./components/ActiveLocationRoutes"
import { LocationSettings } from "./views/LocationSettings"
import { GuestLayout } from "./layouts/GuestLayout"
import { MasterProvider } from "./components/MasterProvider"

function App() {
  return (
    <div className="App">
      <MasterProvider>
        <BrowserRouter>
          <Routes>
            {/* these are our guest routes */}
            {/* logged in users cannot access these without first logging out */}
            <Route path="/" element={<GuestLayout />}>
              <Route element={<GuestRoutes />}>
                <Route index element={<GuestHome />} />
              </Route>
            </Route>
            {/* The layout is placed above protected routes */}
            {/* this is to ensure that when loading, the navbar is still visible */}
            {/* this set of routes is for all application level routes */}
            <Route path="/app" element={<UserLayout />}>
              <Route element={<ProtectedRoutes />}>
                <Route index element={<UserHome />} />
                <Route path="/app/settings" element={<UserSettings />} />
                <Route path="/app/location" element={<LocationHome />} />
                <Route path="/app/logout" element={<Logout />} />
              </Route>
            </Route>
            {/* the layout is placed above protected routes */}
            {/* this makes the navbar visible on loading */}
            {/* this set of routes is for all location level routes */}
            <Route path="/location" element={<LocationLayout />}>
              <Route element={<ProtectedRoutes />}>
                <Route element={<ActiveLocationRoutes />}>
                  <Route index element={<LocationHome />} />
                  <Route
                    path="/location/settings"
                    element={<LocationSettings />}
                  />
                </Route>
              </Route>
            </Route>
            {/* this ends all our routes and acts as a marker */}
          </Routes>
        </BrowserRouter>
      </MasterProvider>
    </div>
  )
}

export default App
