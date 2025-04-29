import { createContext, ReactNode, useContext, useState } from 'react';
import { BlogPost } from '../blogType';

interface DataContextType {
  data: BlogPost | null;
  setData: (data: BlogPost | null) => void;
}

const DataContext = createContext<DataContextType>({} as DataContextType);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<BlogPost | null>(null);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {/* Render children inside the provider */}
      {children}
    </DataContext.Provider>
  );
};
// Custom hook to use the DataContext
// This hook allows components to access the context value without needing to use useContext directly
// It also provides a type-safe way to access the context
export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
