export const deleteLocation = async (id: string) => {
  const response = await fetch(`http://localhost:8080/location/delete/${id}`, {
    method: "DELETE",
    credentials: "include",
  })
  return response
}
