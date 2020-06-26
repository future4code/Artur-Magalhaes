import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { api, getTrips, delDeleteTrip } from '../../service/api';
import useToken from '../../hooks/useToken';
import * as S from '../../components/globalStyle'
import * as SL from './style';
import HeaderConnected from '../../components/HeaderConnected';

export default function ListTripPage() {
  const [trips, setTrips] = useState([]);
  const history = useHistory();
  const { token, validToken } = useToken('');

  useEffect(() => {
    
    validToken();

    getTrips().then(response => {
      setTrips(response)
    })

  },[trips]);

  const createTrip = () => {
    history.push('/createtrip')
  }

  const deleteTrip = (id) => {
    window.alert('Viagem Retirada')
    delDeleteTrip(id)
  }

  const detailTrip = (id) => {
    history.push(`/detailTrip/${id}`)
  }

  return(
    <S.DivContent>
      <HeaderConnected />
      <button onClick={createTrip}>Criar Viagem</button>
      <S.Ul>
      {trips.map(trip => {
        return(
            <S.ListTrips key={trip.id}>
              <SL.DivList>
                <strong>{trip.name}</strong>
                <div>
                  <button onClick={() => deleteTrip(trip.id)}>X</button>
                  <button onClick={() => detailTrip(trip.id)}>Edit</button>
                </div>
              </SL.DivList>
            </S.ListTrips>)
      })}
      </S.Ul>
    </S.DivContent>
  )
}