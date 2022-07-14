import { useState, useEffect } from 'react';
import axios from '@/services';

const useAxios = ({ url, method, payload = null }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    axios({
      url,
      method,
      data: payload,
    })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [method, url, payload]);

  return { response, error, loading };
};

export default useAxios;
