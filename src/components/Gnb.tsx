import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Gnb = () => {
    const navigate = useNavigate();

    const onLogout = () => {
        localStorage.removeItem('userData');
        navigate('/login');
    };

    return (
        <nav>
            <Link to={'/page/menu1'}>Menu1</Link>
            <Link to={'/page/menu2'}>Menu2</Link>
            <Link to={'/page/menu3'}>Menu3</Link>
            <button onClick={onLogout}>Logout</button>
        </nav>
    );
};

export default Gnb;
