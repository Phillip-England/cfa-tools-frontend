import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GuestHome } from "./views/GuestHome"
import { UserHome } from "./views/UserHome"
import { ProtectedRoutes } from "./components/routing/ProtectedRoutes"
import { UserProvider } from "./components/providers/UserProvider"
import { GuestRoutes } from "./components/routing/GuestRoutes"
import { Logout } from "./views/Logout"
import { UserLayout } from "./layouts/UserLayout"
import { PageProvider } from "./components/providers/PageProvider"
import { UserSettings } from "./views/UserSettings"
import { LocationHome } from "./views/LocationHome"
import { LocationLayout } from "./layouts/LocationLayout"
import { ActiveLocationProvider } from "./components/providers/ActiveLocationProvider"
import { ActiveLocationRoutes } from "./components/routing/ActiveLocationRoutes"

function App() {
  return (
    <div className="App">
      <PageProvider>
        <UserProvider>
          <ActiveLocationProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/">
                  <Route element={<GuestRoutes />}>
                    <Route index element={<GuestHome />} />
                  </Route>
                </Route>
                <Route element={<ProtectedRoutes />}>
                  <Route path="/app" element={<UserLayout />}>
                    <Route index element={<UserHome />} />
                    <Route path="/app/settings" element={<UserSettings />} />
                    <Route path="/app/location" element={<LocationHome />} />
                    <Route path="/app/logout" element={<Logout />} />
                  </Route>
                  <Route element={<ActiveLocationRoutes />}>
                    <Route path="/location" element={<LocationLayout />}>
                      <Route index element={<LocationHome />} />
                    </Route>
                  </Route>
                </Route>
              </Routes>
            </BrowserRouter>
          </ActiveLocationProvider>
        </UserProvider>
      </PageProvider>
    </div>
  )
}

export default App
