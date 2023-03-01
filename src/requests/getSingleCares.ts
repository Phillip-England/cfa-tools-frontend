export const getSingleCares = async (id: string) => {
  const response = await fetch(`http://localhost:8080/cares/${id}`, {
    method: "GET",
    credentials: "include",
  })
  return response
}
