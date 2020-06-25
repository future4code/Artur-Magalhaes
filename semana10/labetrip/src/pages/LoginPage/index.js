import React from 'react';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import api from '../../service/api';

export default function LoginPage() {
  const { form, handleForm } = useForm({
    email: '',
    password: '',
  });

  const history = useHistory();
  
  const handleInputs = event => {
    const { name, value } = event.target;
    handleForm(name, value);
  }

  const login = async (event) => {
    event.preventDefault();
    const loginData = form;

    const response = await api.post('login', loginData)
    localStorage.setItem('token', response.data.token);
    history.replace('/listtrip');
    
  }

  return(
    <form onSubmit={login}>
      <input 
        name="email"
        value={form.email}
        placeholder='Email'
        type='email'
        onChange={handleInputs}
        required />
      <input 
        name="password"
        value={form.password}
        placeholder='Senha'
        type="password"
        onChange={handleInputs}
        required />
      <button>Entrar</button>
    </form>)
}