import axios from 'axios';

const token = 'token';

const ApiTokenMiddleware = axios.create({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default ApiTokenMiddleware;
