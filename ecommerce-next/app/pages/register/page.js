'use client';

import { useState } from 'react';

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
console.log(message);

    const handleRegister = async (e) => {
        e.preventDefault();
        
        const res = await fetch('/api/usuarios/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password }),
        });

        const data = await res.json();
        setMessage(data.message);
    };

    return (
        <div>
            <h2>Registro</h2>
            <form onSubmit={handleRegister}>
                <input 
                    type="text" 
                    placeholder="Nombre de usuario" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Contraseña" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Registrar</button>
            </form>
            {message && <p className='text-black'>{message}</p>}
        </div>
    );
}
