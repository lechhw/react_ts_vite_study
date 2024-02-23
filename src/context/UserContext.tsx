import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

type userDataType = {
    userId: string;
    token: string;
    access: string;
};

interface UserContextType {
    userData: userDataType | null;
    handleLogin: (user: userDataType) => void;
    handleLogout: () => void;
    isLogin: boolean;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [userData, setUserData] = useState<userDataType | null>(null);
    const [isLogin, setIsLogin] = useState(!!localStorage.getItem('userData'));
    const navigate = useNavigate();

    const handleLogin = (user: userDataType) => {
        localStorage.setItem('userData', JSON.stringify(user));
        setUserData(user);
        setIsLogin(true);
        navigate('/');
    };

    const handleLogout = () => {
        localStorage.removeItem('userData');
        setUserData(null);
        setIsLogin(false);
        navigate('/login');
    };

    useEffect(() => {
        const storedUser = localStorage.getItem('userData');
        if (storedUser) setUserData(JSON.parse(storedUser));
    }, []);

    return <UserContext.Provider value={{ userData, handleLogin, handleLogout, isLogin }}>{children}</UserContext.Provider>;
};

export const useUserState = () => {
    const state = useContext(UserContext);
    if (!state) throw new Error('dd');
    return state;
};
