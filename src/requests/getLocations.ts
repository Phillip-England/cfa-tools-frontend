export const getLocations = async () => {
  const response = await fetch("http://localhost:8080/location/get", {
    method: "GET",
    credentials: "include",
  })
  return response
}
