import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { api, postCreateTrip } from '../../service/api';
import useToken from '../../hooks/useToken';
import * as S from './style';
import HeaderConnected from '../../components/HeaderConnected';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    width: '116px',
    marginRight: '24px',
  }
}));

export default function CreateTripPage() {
  const { token, validToken } = useToken();
  const { form, handleForm } = useForm({
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: '',
  })
  const classes = useStyles();
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
    const data = form

    const config = {
      headers: {
        auth: token,
      }}

    postCreateTrip(data, config)
      .then(response => {
      window.alert('Viagem Criada!');
      history.goBack();
    })

    /*api.post('trips', data, config)
      .then(response => {
        window.alert('Viagem Criada!');
        history.goBack();
      })
      .catch(error => {
        console.log(error);
      })*/
  }

  const cancel = () => {
    history.goBack();
  }

  return(<>
    <HeaderConnected />
    <S.DivCreate>CreateTrip</S.DivCreate>
    <S.FormApply onSubmit={createTrip}>
      <S.Labels htmlFor="planet">Planeta</S.Labels>
      <S.SelectCountry name="planet" value={form.planet} onChange={handleInputs} required>
        <option value=""></option>
        {planets.map(planet => {
          return <option key={planet.name} value={planet.name}>{planet.name}</option>
        })}
      </S.SelectCountry>
      <S.Labels htmlFor="name">Nome da Viagem</S.Labels>
      <S.Input
        name="name"
        type="text"
        placeholder="Nome"
        value={form.name}
        onChange={handleInputs} 
        pattern="[A-Z][a-z \d]{4,}"
        required />
      <S.Labels htmlFor="description">Descrição da Viagem</S.Labels>
      <S.Input
        name="description"
        type="text"
        placeholder="Descrição"
        value={form.description}
        onChange={handleInputs} 
        pattern="[A-Z \d][A-Za-z \d]*{29,}"
        required />
      <div>
        <S.Labels htmlFor="date">Data</S.Labels>
        <S.Labels htmlFor="durationInDays">
          Tempo de Viagem
          <S.Small> (em dias)</S.Small>
        </S.Labels>
      </div>
      <S.Input15pc
        name="date"
        type="date"
        min={DateToday}
        placeholder="Data"
        value={form.date}
        onChange={handleInputs} 
        required />
      <S.Input85pc
        name="durationInDays"
        type="number"
        min="50"
        placeholder="Duração"
        value={form.durationInDays}
        onChange={handleInputs}
        required />
      <S.Button>
        <Button className={classes.button} variant="contained" color="secondary" onClick={cancel}>Cancelar</Button>
        <Button className={classes.button} variant="contained" color="primary" type="submit">Criar</Button>
      </S.Button>
    </S.FormApply>
  </>)
}