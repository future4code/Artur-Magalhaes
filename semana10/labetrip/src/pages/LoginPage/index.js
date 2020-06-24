import React from 'react';
import { useHistory } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import api from '../../service/api';

export default function LoginPage() {
  const [inputEmail, handleInputEmail] = useInput('');
  const [inputPassword, handleInputPassword] = useInput('');
  const history = useHistory();
  
  const login = async(email, password) => {
    const loginData = {
      email: email,
      password: password,
    }

    const response = await api.post('login', loginData)
    localStorage.setItem('token', response.data.token);
    history.replace('/listtrip');
    
  }

  return(<>
    <input placeholder='Email' onChange={handleInputEmail} value={inputEmail}/>
    <input placeholder='Senha' type="password" onChange={handleInputPassword} value={inputPassword}/>
    <button onClick={() => login(inputEmail, inputPassword)}>Entrar</button>
  </>)
}