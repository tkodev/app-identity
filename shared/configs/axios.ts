import axios from 'axios'

const axiosClient = axios.create({
  // baseURL: 'https://some-domain.com/api/',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export { axiosClient }