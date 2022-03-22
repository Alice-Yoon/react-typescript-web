import axios from 'axios'

export const serverAPI = axios.create({
  baseURL: "https://caffein-server.herokuapp.com/api"
})