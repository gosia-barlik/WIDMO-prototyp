import axios from "axios"

export const api = axios.create({
  withCredentials: true,
  // baseURL: "https://aira.com/api/v1",
  baseURL: "https://localhost:5000/api/v1",
})

const errorHandler = (error) => {
  const statusCode = error.response?.status

  if (statusCode && statusCode !== 401) {
    console.error(error)
  }

  return Promise.reject(error)
}

api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error)
})