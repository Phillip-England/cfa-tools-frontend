export const getUser = async () => {
  const response = await fetch("http://localhost:8080/user/get", {
    method: "GET",
    credentials: "include",
  })
  return response
}
