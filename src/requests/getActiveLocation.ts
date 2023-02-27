export const getActiveLocation = async () => {
  const response = await fetch("http://localhost:8080/location/get/active", {
    method: "GET",
    credentials: "include",
  })
  return response
}
