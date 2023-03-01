PROJECT STRUCTURE | IMPORTANT DEVELOPMENT DETAILS

/components/routeWrappers - Contains different wrappers that wrap certain routes to fetch resources. For example, LocationRoutes.tsx wraps all routes pertaining to Location-Level Routes and helps to ensure the active location is properly set. BUT when we navigate to a User-Level Route (which is found higher on the DOM tree), the active location will get dropped. In this way, Wrappers higher on the DOM tree will drop the resources of routes found lower on the DOM tree. This is to reduce the amount of API calls needed while traversing the application. The following lists out how each wrapper operates and what resources they fetch / drop

ProtectedRoutes.tsx
GET - user
DROPS - nothing
NOTES - Ran on every route requiring a user. It is triggered by updating the "page" piece of state. Helps to ensure our users http-cookies are not expired.

UserRoutes.tsx
GETS - nothing
DROPS - activeLocation

LocationRoutes.tsx
GETS - activeLocation
DROPS - cares

GuestRoutes.tsx
GETS - nothing
DROPS - locations

CaresRoutes.tsx
GET - cares
DROPS - nothing
