export const dropActiveLocation = async () => {
  const response = await fetch("http://localhost:8080/location/drop/active", {
    method: "GET",
    credentials: "include",
  })
  return response
}
