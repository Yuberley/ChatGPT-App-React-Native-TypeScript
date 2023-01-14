import React, { useState,createContext } from 'react';

import { MessageType } from '../types/types';

export const DataContext = createContext({});

interface Props {
    children: React.ReactNode;
}

export const DataProvider = ({ children }: Props) => {

  const [textInput, setTextInput] = useState<MessageType>({} as MessageType);

  return (
    <DataContext.Provider value={{ textInput, setTextInput }}>
        {children}
    </DataContext.Provider>
  )
}