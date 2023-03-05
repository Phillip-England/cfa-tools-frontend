import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginPage } from "./views/LoginPage"
import { UserLocations } from "./views/UserLocations"
import { ProtectedRoutes } from "./components/routeWrappers/ProtectedRoutes"
import { GuestRoutes } from "./components/routeWrappers/GuestRoutes"
import { Logout } from "./views/Logout"
import { UserLayout } from "./layouts/UserLayout"
import { UserSettings } from "./views/UserSettings"
import { LocationTools } from "./views/LocationTools"
import { LocationLayout } from "./layouts/LocationLayout"
import { LocationRoutes } from "./components/routeWrappers/LocationRoutes"
import { LocationSettings } from "./views/LocationSettings"
import { GuestLayout } from "./layouts/GuestLayout"
import { MasterProvider } from "./components/context/MasterProvider"
import { UserRoutes } from "./components/routeWrappers/UserRoutes"
import { CaresRoutes } from "./components/routeWrappers/CaresRoutes"
import { CaresHome } from "./views/CaresHome"
import { CaresLayout } from "./layouts/CaresLayout"
import { CaresDetail } from "./views/CaresDetail"
import { SignupPage } from "./views/SignupPage"

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
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
              </Route>
            </Route>
            {/* The layout is placed above protected routes */}
            {/* this is to ensure that when loading, the navbar is still visible */}
            {/* this set of routes is for all application level routes */}
            <Route path="/app" element={<UserLayout />}>
              <Route element={<ProtectedRoutes />}>
                <Route element={<UserRoutes />}>
                  <Route path="/app/locations" element={<UserLocations />} />
                  <Route path="/app/settings" element={<UserSettings />} />
                  <Route path="/app/location" element={<LocationTools />} />
                  <Route path="/app/logout" element={<Logout />} />
                </Route>
              </Route>
            </Route>
            {/* the layout is placed above protected routes */}
            {/* this makes the navbar visible on loading */}
            {/* this set of routes is for all location level routes */}
            <Route path="/location" element={<LocationLayout />}>
              <Route element={<ProtectedRoutes />}>
                <Route element={<LocationRoutes />}>
                  <Route path="/location/tools" element={<LocationTools />} />
                  <Route
                    path="/location/settings"
                    element={<LocationSettings />}
                  />
                </Route>
              </Route>
            </Route>
            {/* all routes found here contain data about cares */}
            {/* these must be wrapped by location routes */}
            {/* because cares routes must contain an active location */}
            <Route path="/cares" element={<CaresLayout />}>
              <Route element={<ProtectedRoutes />}>
                <Route element={<CaresRoutes />}>
                  <Route path="/cares/create" element={<CaresHome />} />
                  <Route path="/cares/view/:id" element={<CaresDetail />} />
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
