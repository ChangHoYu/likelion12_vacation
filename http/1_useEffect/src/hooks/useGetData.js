import { instance } from '../axios/http';
import { useState, useEffect } from 'react';

export function useGetData(url, initialValue) {
  const [isLoading, setIsLoading] = useState(null);
  const [fetchedData, setFetchedData] = useState(initialValue);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const { data } = await instance.get(`${url}`);
        setFetchedData(data);
        console.log(fetchedData);
      } catch (error) {
        setError({
          message: error.response.message || '데이터를 가져오는데 실패했습니다.',
          status: error.response.status,
        });
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  return {
    isLoading,
    fetchedData,
    error,
  };
}
