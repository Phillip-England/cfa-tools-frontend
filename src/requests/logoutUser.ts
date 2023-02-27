export const logoutUser = async () => {
  const response = await fetch("http://localhost:8080/user/logout", {
    method: "GET",
    credentials: "include",
  })
  return response
}
