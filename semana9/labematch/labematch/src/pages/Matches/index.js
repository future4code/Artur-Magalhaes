import React, { useState, useEffect } from 'react'
import api from '../../service/api'
import * as S from './style'

export default function Matches() {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    api.get('matches')
      .then(response => {
          console.log(response.data)
          setPersons(...persons, response.data.matches)
      })
      .catch(err => {
          console.log(err)
      })
  },[])

  

  return(<>
    {persons.map((person) => (
        <S.ImgPerfil src={person.photo} />
    ))}
    </>)
    
}