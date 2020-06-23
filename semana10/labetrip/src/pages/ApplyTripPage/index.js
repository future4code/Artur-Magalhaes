import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import useInput from '../../hooks/useInput';
import api from '../../service/api';

export default function ApplyTripPage() {
  const params = useParams();
  const history = useHistory();

  const [inputName, handleInputName] = useInput('');
  const [inputAge, handleInputAge] = useInput('');
  const [inputInterest, handleInputInterest] = useInput('');
  const [inputProfession, handleInputProfession] = useInput('');
  const [inputCountry, handleInputCountry] = useInput('');

  const onClickSubmit = () => {
    const data = {
      name: inputName,
      age: inputAge,
      applicationText: inputInterest,
      profession: inputProfession,
      country: inputCountry,
    }

    api.post(`trips/${params.id}/apply`, data)
      .then(response => {
      }).catch(error => {
        console.log(error);
      });
      
    history.replace('/');
  }

  return(<>
      <input placeholder='Nome' onChange={handleInputName} value={inputName}/>
      <input placeholder='Idade' onChange={handleInputAge} value={inputAge}/>
      <input placeholder='Interesse' onChange={handleInputInterest} value={inputInterest}/>
      <input placeholder='Profissão' onChange={handleInputProfession} value={inputProfession}/>
      <input placeholder='País' onChange={handleInputCountry} value={inputCountry}/>
      <button onClick={onClickSubmit}>Confirmar</button>
      <button onClick={() => history.replace('/')}>Cancelar</button>
    </>
    )
}