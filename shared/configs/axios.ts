import axios from 'axios'
import { API_HOST } from '@/shared/constants'

const axiosClient = axios.create({
  baseURL: API_HOST
})

export { axiosClient }
