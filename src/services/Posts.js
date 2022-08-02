import axios from './index';
import { POSTS } from '@/constants/api';

const getPostsService = (id) => {
  const url = POSTS.getPosts() + `/${id ? id : ''}`;
  return axios.get(url)
}

export default {
  getPostsService,
}
