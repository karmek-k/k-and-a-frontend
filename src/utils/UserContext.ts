import { createContext } from 'react';

export interface User {
  id: string;
  username: string;
}

export const UserContext = createContext<User | null>(null);
