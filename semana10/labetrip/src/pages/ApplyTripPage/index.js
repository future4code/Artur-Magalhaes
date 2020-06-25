import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm';
import api from '../../service/api';

export default function ApplyTripPage() {
  const params = useParams();
  const history = useHistory();

  const { form, handleForm } = useForm({
    name: '',
    age: '',
    applicationText: '',
    profession: '',
    country: '',
  });

  const handleInputs = event => {
    const { name, value } = event.target;
    handleForm(name, value);
  }

  const onClickSubmit = (event) => {
    event.preventDefault()
    console.log(form)

    const data = form

    api.post(`trips/${params.id}/apply`, data)
      .then(response => {
      }).catch(error => {
        console.log(error);
      });
      
    history.replace('/');
  }

  return(
    <form onSubmit={onClickSubmit}>
      <input 
        name="name" 
        type="text"
        value={form.name}
        placeholder="Nome" 
        onChange={handleInputs} 
        pattern="[A-Z][a-z ]{2,}"
        required />
      <input 
        name="age"
        type="number"
        value={form.age}
        placeholder="Idade"
        onChange={handleInputs}
        min="18"
        required />
      <input 
        name="applicationText" 
        type="text"
        value={form.applicationText} 
        placeholder="Interesse"
        onChange={handleInputs}
        pattern="[A-Za-z ]{30,}"
        required />
      <input 
        name="profession"
        type="text"
        value={form.profession}
        placeholder="Profissão"
        onChange={handleInputs}
        pattern="[A-Za-z ]{10,}"
        required />
      <input
        name="country"
        type=""
        value={form.country}
        placeholder="País"
        onChange={handleInputs} 
        required />
      <button type="submit">Confirmar</button>
      <button onClick={() => history.replace('/')}>Cancelar</button>
    </form>
    )
}