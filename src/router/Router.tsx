import { Navigate, createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PermissionRoute from './PermissionRoute';
import LoginPage from '../pages/member/LoginPage';
import ErrorPage from '../pages/error/ErrorPage';
import Menu1 from '../pages/menu1/Menu1';
import Menu2 from '../pages/menu2/Menu2';
import Menu3 from '../pages/menu3/Menu3';
import App from '../App';
import NotFound from '../pages/error/NotFound';
import ErrorComponent from '../pages/error/ErrorComponent';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Navigate to={'/page/menu1'} /> },
            {
                element: <PrivateRoute authentication={false} />,
                children: [
                    {
                        path: 'login',
                        element: <LoginPage />,
                    },
                ],
            },
            {
                path: 'page',
                element: <PrivateRoute authentication={true} />,
                children: [
                    { index: true, path: 'menu1', element: <Menu1 /> },
                    { path: 'menu2', element: <Menu2 /> },
                    {
                        element: <PermissionRoute access={'0'} />,
                        children: [{ path: 'menu3', element: <Menu3 /> }],
                    },
                ],
            },
        ],
    },
    { path: '/error/:code', element: <ErrorPage /> },
    // { path: '*', element: <Navigate to={'/error/404'} /> },
]);

// const Router = () => {
//     return (
//         <Routes>
//             {/* 인증 미완료인 경우에만 접근 가능 */}
//             <Route element={<PrivateRoute authentication={false} />}>
//                 <Route path="/login" element={<LoginPage />} />
//             </Route>

//             {/* 인증 완료인 경우에만 접근 가능 */}
//             <Route element={<PrivateRoute authentication={true} />} >

//                 <Route path="/" index element={<Navigate to={'/page/menu1'} />} />

//                 <Route path="/page/menu1" element={<Menu1 />} />
//                 <Route path="/page/menu2" element={<Menu2 />} />
//                 <Route element={<PermissionRoute access={'0'} />}>
//                     {/* 권한 체크 완료 후 접근 가능 */}
//                     <Route path="menu3" element={<Menu3 />} />
//                 </Route>
//             </Route>

//             {/* 인증 없이 접근 가능 */}
//             <Route path="/error/:code" element={<ErrorPage />} />
//             <Route path="*" element={<Navigate to={'/error/404'} />} />
//         </Routes>
//     );
// };

export default Router;
