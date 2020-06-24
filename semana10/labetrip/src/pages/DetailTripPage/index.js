import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import api from '../../service/api';

export default function DetailTripPage() {
  const [trip, setTrip] = useState({});
  const [candidates, setCandidates] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token'));

  const history = useHistory();

  const params = useParams();

  useEffect(() => {
    if (token === null){
      history.push('/login');
    }
    const config = {
      headers: {
      auth: token,
      }
    }

    api.get(`trip/${params.id}`, config)
      .then(response => {
        console.log(response.data.trip)
        setTrip(response.data.trip);
        setCandidates(response.data.trip.candidates)
      },)
      .catch(error => {
        console.log(error)
      });
  },[])

  const approve = (id) => {
    const data = {
      "approve": true
    }

    const config = {
      headers: {
      auth: token,
      }
    }

    api.put(`trips/${params.id}/candidates/${id}/decide`, data, config)
      .catch(error => {
        console.log(error)
      });
    window.alert(`Candidato Aprovado`);
  }

  const disapprove = (id) => {
    const data = {
      "approve": false
    }

    const config = {
      headers: {
      auth: token,
      }
    }

    api.put(`trips/${params.id}/candidates/${id}/decide`, data, config)
      .catch(error => {
        console.log(error)
      });
    window.alert(`Candidato Desaprovado`);
  }

  return(<>
    <button onClick={() => history.push('/listTrip')}>Voltar</button>
    <div key={trip.id}>{trip.name}</div>
    <div>{trip.planet} {trip.description} {trip.durationInDays} {trip.date}</div>
    {candidates.map(candidate => {
      return(<div key={candidate.id}>
        {candidate.name}
        <button onClick={() => approve(candidate.id)}>OK</button>
        <button onClick={() => disapprove(candidate.id)}>X</button>
      </div>)
    })}
    </>)
}