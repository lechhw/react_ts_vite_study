import { Navigate, Outlet } from 'react-router-dom';
import { ReactElement } from 'react';
import { useUserState } from '../context/UserContext';

interface OwnProps {
    children?: ReactElement;
    authentication: boolean;
}

const PrivateRoute = ({ authentication }: OwnProps) => {
    const { userData } = useUserState();
    const isLogin = userData ? true : false;

    if (authentication) {
        // 인증 완료 인 경우만 접근 가능
        return !isLogin ? <Navigate to={'/login'} /> : <Outlet />;
    } else {
        // 인증 미완료 인 경우만 접근 가능
        return !isLogin ? <Outlet /> : <Navigate to={'/'} />;
    }
};

export default PrivateRoute;
