import React from 'react';
import useInput from '../../hooks/useInput';

export default function LoginPage() {
  const [inputEmail, handleInputEmail] = useInput('');
  const [inputsenha, handleInputSenha] = useInput('');
  
  return(<>
    <input placeholder='Email' onChange={handleInputEmail} value={inputEmail}/>
    <input placeholder='Senha' onChange={handleInputSenha} value={inputsenha}/>
    <button>Entrar</button>
  </>)
}