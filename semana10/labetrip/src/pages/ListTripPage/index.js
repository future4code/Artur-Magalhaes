import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { api, getTrips, delDeleteTrip } from '../../service/api';
import useToken from '../../hooks/useToken';
import * as S from '../../components/globalStyle'
import * as SL from './style';
import HeaderConnected from '../../components/HeaderConnected';
import { makeStyles } from '@material-ui/core/styles'
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  edit: {
    color: 'blue',
    cursor: 'pointer',
  },
  delete: {
    color: 'red',
    cursor: 'pointer',
    marginRight: '8px',
  },
  button: {
    marginTop: '32px',
    marginRight: '32px',
  }
}));

export default function ListTripPage() {
  const [trips, setTrips] = useState([]);
  const history = useHistory();
  const { token, validToken } = useToken('');
  const classes = useStyles();

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
      <SL.DivCreateTrip>
        <Button className={classes.button} variant="contained" color="primary" onClick={createTrip}>Criar Viagem</Button>
      </SL.DivCreateTrip>
      <S.Ul>
      {trips.map(trip => {
        return(
            <S.ListTrips key={trip.id}>
              <SL.DivList>
                <strong>{trip.name}</strong>
                <div>
                  <DeleteForeverIcon className={classes.delete} viewBox="0 0 24 20" onClick={() => deleteTrip(trip.id)} />
                  <EditIcon className={classes.edit} viewBox="0 0 24 20" onClick={() => detailTrip(trip.id)} />
                </div>
              </SL.DivList>
            </S.ListTrips>)
      })}
      </S.Ul>
    </S.DivContent>
  )
}