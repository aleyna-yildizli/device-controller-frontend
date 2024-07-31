import axios from 'axios';

const BASE_URL = 'http://localhost:5680/api/v1/roltek';

const apiInstance = axios.create({
  baseURL: BASE_URL,
});

export default apiInstance;