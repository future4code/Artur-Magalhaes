import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { api, getTrips, delDeleteTrip } from '../../service/api';
import useToken from '../../hooks/useToken';

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

  return(<>
    <button onClick={createTrip}>Criar Viagem</button>
    {trips.map(trip => {
      return(
        <div key={trip.id}>
          {trip.name} 
          <button onClick={() => deleteTrip(trip.id)}>X</button>
          <button onClick={() => detailTrip(trip.id)}>Edit</button>
        </div>)
    })}
  </>)
}