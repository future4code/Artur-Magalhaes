import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm';
import { api, apiCountry, postApplyToTrip } from '../../service/api';
import * as SF from './style';
import Header from '../../components/Header'

export default function ApplyTripPage() {
  const [countries, setCountries] = useState([])
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

  useEffect(() => {
    apiCountry.then(response=>{
      setCountries(response.data)
    })
  },[])

  const onClickSubmit = (event) => {
    event.preventDefault()

    const data = form

    postApplyToTrip(params.id, data)

    /*api.post(`trips/${params.id}/apply`, data)
      .then(response => {
      }).catch(error => {
        console.log(error);
      });*/
      
    history.replace('/');
  }

  return(<>
    <Header />
    <SF.FormApply onSubmit={onClickSubmit}>
      <SF.Labels htmlFor="name">Nome</SF.Labels>
      <SF.Input 
        name="name" 
        type="text"
        value={form.name}
        placeholder="Nome" 
        onChange={handleInputs} 
        pattern="[A-Z][a-z ]{2,}"
        required />
      <div>
        <SF.Labels htmlFor="age">Idade</SF.Labels>
        <SF.Labels htmlFor="profession">Profissão</SF.Labels>
      </div>
      <SF.Input15pc 
        name="age"
        type="number"
        value={form.age}
        placeholder="Idade"
        onChange={handleInputs}
        min="18"
        required />
      <SF.Input85pc  
        name="profession"
        type="text"
        value={form.profession}
        placeholder="Profissão"
        onChange={handleInputs}
        pattern="[A-Za-z ]{10,}"
        required />
      <SF.Labels htmlFor="applicationText">Descreva seu interesse na viagem</SF.Labels>
      <SF.Input 
        name="applicationText" 
        type="text"
        value={form.applicationText} 
        placeholder="Interesse"
        onChange={handleInputs}
        pattern="[A-Za-z ]{30,}"
        required />
      <SF.Labels htmlFor="country">País</SF.Labels>  
      <SF.SelectCountry name="country" value={form.country} onChange={handleInputs}>
          {countries.map(res=>{
            return(
              <option key={res.alpha3Code} value={res.name}>{res.name}</option>)
          })}
      </SF.SelectCountry>
    
      <button type="submit">Confirmar</button>
      <button onClick={() => history.replace('/')}>Cancelar</button>
    </SF.FormApply>
    </>)
}