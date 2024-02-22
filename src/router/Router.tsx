import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PermissionRoute from './PermissionRoute';
import LoginPage from '../pages/LoginPage';
import ErrorPage from '../pages/ErrorPage';
import Menu1 from '../pages/Menu1';
import Menu2 from '../pages/Menu2';
import Menu3 from '../pages/Menu3';

const Router = () => {
    return (
        <Routes>
            {/* 인증 미완료인 경우에만 접근 가능 */}
            <Route element={<PrivateRoute authentication={false} />}>
                <Route path="/login" element={<LoginPage />} />
            </Route>

            {/* 인증 완료인 경우에만 접근 가능 */}
            <Route element={<PrivateRoute authentication={true} />}>
                <Route path="/" element={<Navigate to={'/page/menu1'} />} />

                <Route path="/page">
                    <Route path="menu1" element={<Menu1 />} />
                    <Route path="menu2" element={<Menu2 />} />
                    <Route element={<PermissionRoute access={'0'} />}>
                        {/* 권한 체크 완료 후 접근 가능 */}
                        <Route path="menu3" element={<Menu3 />} />
                    </Route>
                </Route>
            </Route>

            {/* 인증 없이 접근 가능 */}
            <Route path="/error/:code" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to={'/error/404'} />} />
        </Routes>
    );
};

export default Router;
