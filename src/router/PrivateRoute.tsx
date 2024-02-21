import { Navigate, Outlet } from 'react-router-dom';
import { ReactElement } from 'react';

interface OwnProps {
    children?: ReactElement;
    authentication: boolean;
}

const PrivateRoute = ({ authentication }: OwnProps) => {
    console.log('1 메인 접속 시도');
    const isLogin = localStorage.getItem('userData') ? true : false;

    if (authentication) {
        return !isLogin ? <Navigate to={'/login'} /> : <Outlet />;
    } else {
        return !isLogin ? <Outlet /> : <Navigate to={'/'} />;
    }
};

export default PrivateRoute;
