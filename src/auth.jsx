export const fakeLogin = (username, password) => {

    if (username === 'usuario' && password === 'pass') {

      const token = 'token_simulado';
  
      localStorage.setItem('token', token);
  
      return token;
    }
  
    throw new Error('Credenciales inválidas');
  };
  
  export const fakeLogout = () => {

    localStorage.removeItem('token');
  };
  
  export const isAuthenticated = () => {

    return !!localStorage.getItem('token');
  };
  