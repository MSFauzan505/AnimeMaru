import { useState } from "react";
import FormLayout from "../layout/FormLayout";
import { ButtonPrimary } from "../components/Button/ButtonValidation";
import { Link, useNavigate } from "react-router-dom";  // Import useNavigate untuk redirect

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();  // Hook untuk redirect

    const handleLogin = () => {
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
            setError('');
            onLogin(true);  // Mengembalikan true jika login berhasil
            navigate('/home');  // Redirect ke halaman Home setelah login berhasil
            setUsername('');  // Reset input
            setPassword('');  // Reset input
        } else {
            setError('Username atau password salah');
            onLogin(false);  // Mengembalikan false jika login gagal
        }
    };

    return (
        <FormLayout linkRoute='/register' isLoginPage={true}>
            <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                <div className='mb-4'>
                    <label className='block text-white mb-2' htmlFor='username'>Username</label>
                    <input
                        type='text'
                        id='username'
                        className='w-full p-2 rounded'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='masukkan username..'
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-white mb-2' htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        className='w-full p-2 rounded'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='masukkan password..'
                        required
                    />
                </div>
                {error && <p className='text-red-500'>{error}</p>}
                <ButtonPrimary type='submit' text='Login' />
            </form>
        </FormLayout>
    );
}

export default Login;
