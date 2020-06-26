import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { api, getTripDetail, putDecideCandidate } from '../../service/api';
import useToken from '../../hooks/useToken';

export default function DetailTripPage() {
  const [trip, setTrip] = useState([]);
  const [candidates, setCandidates] = useState([]);

  const {token, validToken} = useToken('');

  const history = useHistory();

  const params = useParams();

  useEffect(() => {
    
    validToken()

    const config = {
      headers: {
        auth: token,
      }
    }
    
    api.get(`trip/${params.id}`, config)
      .then(response => {
        setTrip(response.data.trip);
        setCandidates(response.data.trip.candidates)
      })
      .catch(error => {
        console.log(error)
      });
      
  },[token, candidates])

  const approve = (id, status) => {
    const data = {
      "approve": status
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
    
    (status?
      window.alert(`Candidato Aprovado`) : 
      window.alert(`Candidato Desaprovado`));
  }

  return(<>
    <button onClick={() => history.push('/listTrip')}>Voltar</button>
    <div key={trip.id}>{trip.name}</div>
    <div>{trip.planet} {trip.description} {trip.durationInDays} {trip.date}</div>
    {candidates.map(candidate => {
      return(<div key={candidate.id}>
        {candidate.name}
        <button onClick={() => approve(candidate.id, true)}>OK</button>
        <button onClick={() => approve(candidate.id, false)}>X</button>
      </div>)
    })}
    </>)
}