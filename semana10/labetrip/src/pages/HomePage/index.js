import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { api, getTrips } from '../../service/api';

export default function Home() {
  const [trips, setTrips] = useState([]);
  const history = useHistory();

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
    <button onClick={() => history.push('/login')}>Login</button>
    {trips.map((trip) => {
      return(
        <div key={trip.id} onClick={() => history.push(`/apply/${trip.id}`)}>
          {trip.name}
        </div>)
    })}
  </>)
}