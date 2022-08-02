import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Accept': '*/*',
    'Content-Type': 'application/json'
  }
});

export default instance;
