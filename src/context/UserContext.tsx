import React, { createContext, useState, useEffect, useContext } from 'react';

interface UserContextType {
    userData?: { userId: string; token: string; access: string };
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('userData');
        if (storedUser) setUserData(JSON.parse(storedUser));
    }, []);

    return <UserContext.Provider value={userData}>{children}</UserContext.Provider>;
};

export const useUserState = () => {
    const state = useContext(UserContext);

    return state;
};
