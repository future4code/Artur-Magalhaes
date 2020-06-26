import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { api, getTripDetail, putDecideCandidate } from '../../service/api';
import useToken from '../../hooks/useToken';
import * as SG from '../../components/globalStyle'
import * as S from './style';
import HeaderConnected from '../../components/HeaderConnected';
import { makeStyles } from '@material-ui/core/styles'
import CheckIcon from '@material-ui/icons/Check';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  approve: {
    color: 'green',
    cursor: 'pointer',
    marginRight: '8px'
  },
  disapprove: {
    color: 'red',
    cursor: 'pointer'
  },
  button: {
    width: '88px',
    marginTop: '16px',
    marginLeft: '32px',
  }
}));

export default function DetailTripPage() {
  const [trip, setTrip] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const classes = useStyles();

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
    <Button variant="contained" color="primary" className={classes.button} onClick={() => history.push('/listTrip')}>Voltar</Button>
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
              <CheckIcon className={classes.approve} viewBox="0 0 20 20" onClick={() => approve(candidate.id, true)} />
              <DeleteForeverIcon className={classes.disapprove} viewBox="0 0 20 20" onClick={() => approve(candidate.id, false)}>X</DeleteForeverIcon>
            </div>
            </S.DivList>
          </SG.ListTrips>)
      })}
    </SG.Ul>
    </>)
}