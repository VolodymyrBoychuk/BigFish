import focus from '../data/focusdata';

export interface FocusArea {
  id: number;
  title: string;
  content: string;
}

const useFocus = (): {
  data: FocusArea[];
  isLoading: boolean;
  error: null | string;
} => {
  return {
    data: focus,
    isLoading: false,
    error: null,
  };
};

export default useFocus;
