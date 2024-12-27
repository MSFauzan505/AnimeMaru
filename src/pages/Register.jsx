import React, { useState } from 'react';
import FormLayout from '../layout/FormLayout';
import { Link } from 'react-router-dom';
import { ButtonPrimary } from '../components/Button/ButtonValidation';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleRegister = () => {
        const existingUsername = localStorage.getItem('username');
        if (existingUsername === username) {
            setError('Username already exists');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }
        if (password !== password2) {
            setError('Passwords do not match');
            return;
        }
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        setError('');
        setIsSuccess(true);

        setTimeout(() => setIsSuccess(false), 3000); // Auto-hide success message
    };

    return (
        <FormLayout linkRoute='/' isLoginPage={false}>
            <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
                <div className='mb-4'>
                    <label className='block text-white mb-2' htmlFor='username'>Username Baru</label>
                    <input
                        type='text'
                        id='username'
                        className='w-full p-2 rounded'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='username baru'
                        required
                        autoComplete='username'
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-white mb-2' htmlFor='password'>Password Baru</label>
                    <input
                        type='password'
                        id='password'
                        className='w-full p-2 rounded'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='password baru'
                        required
                        autoComplete='new-password'
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-white mb-2' htmlFor='confirmPassword'>Konfirmasi Password</label>
                    <input
                        type='password'
                        id='confirmPassword'
                        className='w-full p-2 rounded'
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                        placeholder='Konfirmasi'
                        required
                    />
                </div>
                {error && <p className='text-red-500'>{error}</p>}
                <ButtonPrimary type='submit' text='Register' />
                {isSuccess && <p className='text-white'>Registration successful! <Link to='/login' className='text-green-400'>Go to login</Link></p>}
            </form>
        </FormLayout>
    );
}

export default Register;
