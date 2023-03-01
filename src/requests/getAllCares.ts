export const getAllCares = async () => {
  const response = await fetch("http://localhost:8080/cares/get/all", {
    method: "GET",
    credentials: "include",
  })
  return response
}
