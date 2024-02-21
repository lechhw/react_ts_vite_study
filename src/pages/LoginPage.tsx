import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [form, setForm] = useState({ id: '', pw: '' });
    const navigate = useNavigate();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setForm((data) => ({ ...data, [name]: value }));
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = { userId: form.id, token: '1234', sort: '00' };
        localStorage.setItem('userData', JSON.stringify(userData));

        setTimeout(() => {
            navigate('/');
        });
        console.log('submit');
    };

    return (
        <>
            <h1>Login Page</h1>
            <p>로그인한 상태에선 접근 불가능</p>
            <form onSubmit={onSubmit}>
                <label htmlFor="id">ID</label>
                <input id="id" name="id" type="text" value={form.id} onChange={onChange} />

                <label htmlFor="pw">PW</label>
                <input id="pw" name="pw" type="password" value={form.pw} onChange={onChange} />
                <button type="submit">login</button>
            </form>
        </>
    );
};

export default LoginPage;
