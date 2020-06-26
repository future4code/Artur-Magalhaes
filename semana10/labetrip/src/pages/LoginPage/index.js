import React from 'react';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { postLogin } from '../../service/api';

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

    postLogin(loginData)
      .then(response=>{
        console.log(response);
        localStorage.setItem('token', response.token);
        history.replace('/listtrip');
      })
      .catch(error => {
        console.log(error)
      })
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