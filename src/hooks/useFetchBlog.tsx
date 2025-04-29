import { useEffect, useState } from 'react';
import { BlogPost } from '../blogType';
import { baseURL } from './baseUrl';

export const useFetchBlog = (url: string) => {
  const [data, setData] = useState<BlogPost>({} as BlogPost);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(baseURL + url);
        if (!res.ok) {
          throw new Error('Failed to load data.');
        }
        const json = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err.message || 'Request error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
