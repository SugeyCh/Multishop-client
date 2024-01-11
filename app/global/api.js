import axios from "axios"

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
})

export default instance