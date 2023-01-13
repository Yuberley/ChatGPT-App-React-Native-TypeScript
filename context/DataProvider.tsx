import React, { useState,createContext } from 'react';

export const DataContext = createContext({});

interface Props {
    children: React.ReactNode;
}

export const DataProvider = ({ children }: Props) => {

  const [textInput, setTextInput] = useState<string>('');

  return (
    <DataContext.Provider value={{ textInput, setTextInput }}>
        {children}
    </DataContext.Provider>
  )
}