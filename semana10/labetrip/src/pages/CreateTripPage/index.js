import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import api from '../../service/api';

export default function CreateTripPage() {
  const { form, handleForm } = useForm({
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: '',
  })

  const history = useHistory();

  const [token, setToken] = useState(localStorage.getItem('token'))
  
  const handleInputs = event => {
    const { name, value } = event.target;
    handleForm(name, value);
  }

  useEffect(() => {

    if(token === null){
      history.push('/login');
    }

  },[token]);

  const createTrip = (event) => {
    event.preventDefault();

    const data = form

    const config = {
      headers: {
        auth: token,
      }}

    api.post('trips', data, config)
      .then(response => {
        window.alert('Viagem Criada!');
        history.goBack();
      })
      .catch(error => {
        console.log(error);
      })
  }

  const cancel = () => {
    history.goBack();
  }

  return(<>
    <div>CreateTrip</div>
    <form onSubmit={createTrip}>
      <input
        name="planet"
        type="text"
        placeholder="Planeta"
        value={form.planet}
        //Dropdown
        onChange={handleInputs} 
        required />
      <input
        name="date"
        type="date" //Data no futuro
        placeholder="Data"
        value={form.date}
        onChange={handleInputs} 
        required />
      <input
        name="name"
        type="text"
        placeholder="Nome"
        value={form.name}
        onChange={handleInputs} 
        pattern="[A-Z][a-z \d]{4,}"
        required />
      <input
        name="description"
        type="text"
        placeholder="Descrição"
        value={form.description}
        onChange={handleInputs} 
        pattern="[A-Z \d][A-Za-z \d]*{29,}"
        required />
      <input
        name="durationInDays"
        type="number"
        min="50"
        placeholder="Duração (Em dias)"
        value={form.durationInDays}
        onChange={handleInputs}
        required />
      <button onClick={cancel}>Cancelar</button>
      <button type="submit">Criar</button>
    </form>
  </>)
}