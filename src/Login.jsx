import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { fakeLogin } from './auth';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    try {
      fakeLogin(username, password);
      navigate('/protected');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div>
      <TextField
        label="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        type="password"
        label="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Iniciar sesión
      </Button>
    </div>
  );
};

export default Login;
