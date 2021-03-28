import React, { useState } from 'react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const addStorage = () => {
    const user = {
      email,
    };
    localStorage.setItem('user', JSON.stringify(user));
  };

  return (
    <>
      <input type="text" onChange={({ target }) => setEmail(target.value)} />
      <input type="password" onChange={({ target }) => setPassword(target.value)} />
      <button type="button" onClick={addStorage}>Entrar</button>
    </>
  );
};

export default AdminLogin;
