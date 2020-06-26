import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { api, getTripDetail, putDecideCandidate } from '../../service/api';
import useToken from '../../hooks/useToken';
import * as SG from '../../components/globalStyle'
import * as S from './style';
import HeaderConnected from '../../components/HeaderConnected';

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
    <HeaderConnected />
    <button onClick={() => history.push('/listTrip')}>Voltar</button>
    <S.StrongTitle key={trip.id}>{trip.name}</S.StrongTitle>
    <S.DivDetail>
      {trip.planet} - {trip.description} - {trip.date} - {trip.durationInDays} dias
    </S.DivDetail>
    <SG.Ul>
      {candidates.map(candidate => {
        return(
          <SG.ListTrips key={candidate.id}>
            <S.DivList>
            <strong>{candidate.name}</strong>
            <div>
              <button onClick={() => approve(candidate.id, true)}>OK</button>
              <button onClick={() => approve(candidate.id, false)}>X</button>
            </div>
            </S.DivList>
          </SG.ListTrips>)
      })}
    </SG.Ul>
    </>)
}