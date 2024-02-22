import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const [errorInfo, setErrorInfo] = useState({ code: '', msg: '' });
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const errorCode = location.pathname.split('/')[2];
        switch (errorCode) {
            case '403':
                setErrorInfo({ code: '403', msg: '접근 권한 없음' });
                break;
            case '404':
                setErrorInfo({ code: '404', msg: '페이지를 찾을 수 없음' });
                break;
        }
    }, []);
    return (
        <div>
            <h1>{errorInfo.code}</h1>
            <p>{errorInfo.msg}</p>
            {(errorInfo.code === '404' || errorInfo.code === '403') && <button onClick={() => navigate('/')}>메인페이지로 이동</button>}
        </div>
    );
};

export default ErrorPage;
