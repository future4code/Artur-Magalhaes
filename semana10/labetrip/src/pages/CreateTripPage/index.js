import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { api } from '../../service/api';
import useToken from '../../hooks/useToken';

export default function CreateTripPage() {
  const { token, validToken } = useToken();
  const { form, handleForm } = useForm({
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: '',
  })

  const history = useHistory();

  // Planets list
  const [planets, setPlanets] = useState([
    {name: "Mercúrio"}, {name: "Vênus"}, {name: "Terra"}, {name: "Marte"}, {name: "Júpiter"}, {name: "Saturno"}, {name: "Urano"}, {name: "Netuno"}
  ]);
  // DateToday
  const [DateToday, setDateToday] = useState('');

  const handleInputs = event => {
    const { name, value } = event.target;
    handleForm(name, value);
  }

  const getDate = () => {
    const day = new Date().getDate() < 10 ? `0${new Date().getDate()}` : new Date().getDate()
    const month = new Date().getMonth() < 9 ? `0${new Date().getMonth()+1}` : new Date().getMonth()
    const dateNow = `${new Date().getFullYear()}-${month}-${day}`
    setDateToday(dateNow)
  }

  useEffect(() => {
    
    getDate();
    validToken()

  },[]);

  const createTrip = (event) => {
    event.preventDefault();
    console.log(form)
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
      <select name="planet" value={form.planet} onChange={handleInputs} required>
        <option value=""></option>
        {planets.map(planet => {
          return <option key={planet.name} value={planet.name}>{planet.name}</option>
        })}
      </select>
      <input
        name="date"
        type="date" //Data no futuro
        min={DateToday}
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