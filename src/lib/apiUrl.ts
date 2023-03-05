import { env } from "./globals"

export const apiUrl = (path: string) => {
  if (env == "DEV") {
    return `http://localhost:8080${path}`
  }
  if (env == "PROD") {
    return `http://localhost:8080${path}`
  }
  return ""
}
