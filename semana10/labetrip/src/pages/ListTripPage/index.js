import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../service/api';

export default function ListTripPage() {
  const [trips, setTrips] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token')

    if(token === null) {
      history.push('/login')
    } else {
    api.get('trips')
      .then(response => {
        setTrips(response.data.trips);
      })
      .catch(error => {
        console.log(error);
      })
  }},[trips]);

  const createTrip = () => {
    history.push('/createtrip')
  }

  const deleteTrip = (id) => {
    window.alert('Viagem Retirada')
    api.delete(`trips/${id}`)
      .catch(error => {
        console.log(error);
      });
  }

  const editTrip = (id) => {
    history.push(`/detailtrip/${id}`);
  }

  const detailTrip = (id) => {
    history.push(`/detailTrip/${id}`)
  }

  return(<>
    <button onClick={createTrip}>Criar Viagem</button>
    {trips.map(trip => {
      return(
        <div key={trip.id} onClick={() => detailTrip(trip.id)}>
          {trip.name} 
          <button onClick={() => deleteTrip(trip.id)}>X</button>
          <button onClick={() => editTrip(trip.id)}>Edit</button>
        </div>)
    })}
  </>)
}