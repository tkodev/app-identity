import axios from 'axios'
import { API_HOST } from '@/utils/env'

const axiosClient = axios.create({
  baseURL: API_HOST
})

export { axiosClient }
