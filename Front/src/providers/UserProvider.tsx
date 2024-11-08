import  {createContext, useState, ReactNode, FC} from 'react';
import {User, UserContextType} from '../types/userTypes';

export const UserContext=createContext<UserContextType | undefined> (undefined);

interface UserProviderProps{ 
    children: ReactNode;
}
export const UserProvider:FC<UserProviderProps>=({children})=>{
     const [user,setUser]=useState<User|null>(null);
    
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    );
    };