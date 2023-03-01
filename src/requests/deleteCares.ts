export const deleteCares = async (id: string) => {
  const response = await fetch(`http://localhost:8080/cares/delete/${id}`, {
    method: "DELETE",
    credentials: "include",
  })
  return response
}
