import React, { useState } from 'react';
import { useUserState } from '../context/UserContext';

const LoginPage = () => {
    const [form, setForm] = useState({ id: '', pw: '' });
    const { handleLogin } = useUserState();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((data) => ({ ...data, [name]: value }));
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = { userId: form.id, token: '1234', access: '0' };
        handleLogin(userData);
    };

    return (
        <>
            <h1>Login Page</h1>
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
