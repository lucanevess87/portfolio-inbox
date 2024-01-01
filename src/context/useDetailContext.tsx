'use client';

import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

export type Content = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  images: string[];
};

type DetailContextType = {
  content: Content | null;
  setContent: Dispatch<SetStateAction<Content | null>>;
};

type DetailContextProviderProps = {
  children: ReactNode;
};

const DetailContext = createContext<DetailContextType>({
  content: null,
  setContent: () => null,
});

export const DetailContextProvider = ({ children }: DetailContextProviderProps) => {
  const [currentContent, setCurrentContent] = useState<Content | null>(null);

  return (
    <DetailContext.Provider
      value={{
        content: currentContent,
        setContent: setCurrentContent,
      }}
    >
      {children}
    </DetailContext.Provider>
  );
};

export const useDetailContext = () => useContext(DetailContext);
