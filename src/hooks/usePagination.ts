import { useState } from 'react';
import { BlogPost } from '../blogType';

export const usePagination = (data: BlogPost[], itemsPerPage: number) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentItems = data.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const nextPage = () => setPage((p) => Math.min(p + 1, totalPages));
  const prevPage = () => setPage((p) => Math.max(p - 1, 1));
  const goToPage = (p: number) => setPage(p);

  return { currentItems, page, totalPages, nextPage, prevPage, goToPage };
};
