import React, { useState } from 'react';
import './AuthForm.css';

function AuthForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Введите ваш email и пароль');
            return;
        }

        try {
            const response = await new Promise((resolve) =>
                setTimeout(() => {
                    if (email === 'test@example.com' && password === 'password') {
                        resolve({ ok: true });
                    } else {
                        resolve({ ok: false });
                    }
                }, 1000)
            );

            if (response.ok) {
                alert('Успешная авторизация!');
            } else {
                setError('Пользователь не найден');
            }
        } catch (err) {
            setError('Ошибка авторизации');
        }
    };

    return (
        <div className="auth-form">
            <h2>Авторизация</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
				
                {error && <p className="error">{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default AuthForm;
