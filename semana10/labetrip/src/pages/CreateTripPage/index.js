import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import api from '../../service/api';

export default function CreateTripPage() {
  const [inputName, handleInputName] = useInput('');
  const [inputPlanet, handleInputPlanet] = useInput('');
  const [inputDate, handleInputDate] = useInput('');
  const [inputDescription, handleInputDescription] = useInput('');
  const [inputDuration, handleInputDuration] = useInput('');

  const history = useHistory();

  const [token, setToken] = useState(localStorage.getItem('token'))
  
  useEffect(() => {

    if(token === null){
      history.push('/login');
    }

  },[token]);

  const createTrip = () => {
    const data = {
      name: inputName,
      planet: inputPlanet,
      date: inputDate,
      description: inputDescription,
      durationInDays: inputDuration,
    }
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
    <input type="" placeholder="Nome" value={inputName} onChange={handleInputName} />
    <input type="" placeholder="Planeta" value={inputPlanet} onChange={handleInputPlanet} />
    <input type="" placeholder="Data" value={inputDate} onChange={handleInputDate} />
    <input type="" placeholder="Descrição" value={inputDescription} onChange={handleInputDescription} />
    <input type="" placeholder="Duração (Em dias)" value={inputDuration} onChange={handleInputDuration} />
    <button onClick={cancel}>Cancelar</button>
    <button onClick={createTrip}>Criar</button>
  </>)
}