import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>MainPage</h1>
            <p>로그인 상태에서만 접근 가능</p>
            <button
                onClick={() => {
                    localStorage.removeItem('userData');
                    setTimeout(() => {
                        navigate('/login');
                    });
                }}
            >
                로그아웃
            </button>
            <button onClick={() => navigate('/login')}>로그인</button>
        </div>
    );
};

export default MainPage;
