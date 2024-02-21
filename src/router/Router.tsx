import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import Menu1 from '../pages/menu1/Menu1';
import Menu2 from '../pages/menu2/Menu2';
import { Menu3 } from '../pages/menu3/Menu3';

const Router = () => {
    return (
        <Routes>
            {/* 인증 미완료인 경우에만 접속 가능한 페이지 */}
            <Route element={<PrivateRoute authentication={false} />}>
                <Route path="/login" element={<LoginPage />} />
            </Route>

            {/* 인증 완료인 경우에만 접속 가능한 페이지 */}
            <Route element={<PrivateRoute authentication={true} />}>
                <Route path="/" element={<Navigate replace to={'/page/menu1'} />} />
                <Route path="/page">
                    <Route path="menu1" element={<Menu1 />} />
                    <Route path="menu2" element={<Menu2 />} />
                    <Route path="menu3" element={<Menu3 />} />
                </Route>
            </Route>

            {/* 아무 상관 없는 페이지 */}
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default Router;
