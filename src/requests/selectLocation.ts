export const selectLocation = async (id: string) => {
  const response = await fetch(`http://localhost:8080/location/select/${id}`, {
    method: "GET",
    credentials: "include",
  })
  return response
}
