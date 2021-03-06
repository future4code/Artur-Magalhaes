import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { api, getTrips } from '../../service/api';
import Header from '../../components/Header';
import * as S from '../../components/globalStyle';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  button: {
    cursor: 'pointer',
  },
}));

export default function Home() {
  const [trips, setTrips] = useState([]);
  const history = useHistory();
  const classes = useStyles();
  useEffect(() => {

    getTrips()
      .then(response => {
      setTrips(response)
    })
      .catch(error => {
        console.log(error);
      })
      
  },[])

  return(<>
    <Header />
    <S.DivContent>
      <S.Ul>
      {trips.map((trip) => {
        return(
          <S.ListTrips className={classes.button} key={trip.id} onClick={() => history.push(`/apply/${trip.id}`)}>
            <strong>{trip.name}</strong> - {trip.planet} - {trip.date} - {trip.durationInDays} dias
          </S.ListTrips>)
      })}
      </S.Ul>
    </S.DivContent>
    </>)
}