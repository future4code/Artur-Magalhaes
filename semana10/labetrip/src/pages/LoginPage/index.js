import React from 'react';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { postLogin } from '../../service/api';
import * as S from './style';
import HeaderLogIn from '../../components/HeaderLogIn';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    width: '92px',
  }
}));

export default function LoginPage() {
  const { form, handleForm } = useForm({
    email: '',
    password: '',
  });
  const classes = useStyles();
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

  return(<>
    <HeaderLogIn />
    <S.FormApply onSubmit={login} id="form">
      <S.DivLogin>LOGIN</S.DivLogin>
      <S.Labels htmlFor="email">E-mail</S.Labels>
      <S.Input 
        name="email"
        value={form.email}
        placeholder='Email'
        type='email'
        onChange={handleInputs}
        required />
      <S.Labels htmlFor="password">Senha</S.Labels>
      <S.Input 
        name="password"
        value={form.password}
        placeholder='Senha'
        type="password"
        onChange={handleInputs}
        required />
      <S.DivButtonLogIn> 
        <Button className={classes.button} variant="contained" color="primary" type="onSubmit" form="form">Entrar</Button>
      </S.DivButtonLogIn>
    </S.FormApply>
  </>)
}