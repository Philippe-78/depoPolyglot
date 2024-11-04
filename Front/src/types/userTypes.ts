// userInfo.ts
export interface User{
    
    firstName: string;
    lastName: string;
    hasDictionary: boolean;
    numberWords: number;
  };
  
  export interface UserContextType{
    user: User | null;
    setUser:(user:User | null) =>void;
  }