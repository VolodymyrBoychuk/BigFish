import tech from '../data/techdata';

export interface Tech {
  id: number;
  title: string;
  content: string;
}

const useTech = (): {
  data: Tech[];
  isLoading: boolean;
  error: null | string;
} => {
  return {
    data: tech,
    isLoading: false,
    error: null,
  };
};

export default useTech;
