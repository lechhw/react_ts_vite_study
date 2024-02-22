import React, { ReactElement } from 'react';
import { useUserState } from '../context/UserContext';
import { Navigate, Outlet } from 'react-router-dom';

interface OwnProps {
    children?: ReactElement;
    access: string;
}

const PermissionRoute = ({ access }: OwnProps) => {
    const { userData } = useUserState();

    return Number(userData?.access) <= Number(access) ? <Outlet /> : <Navigate to={'/error/403'} />;
};

export default PermissionRoute;
