import React, { useState, useEffect } from 'react';

import api from '../../service/api'

import * as S from './style'

export default function Match() {
  const [person, setPerson] = useState({});

  useEffect(() => {
    api.get('person')
      .then(response => {
        console.log(response.data.profile)
        setPerson(response.data.profile)
      })
      .catch(err => {
        console.log(err)
      })
  },[])

  return(
    <S.ImagePerfil src={person.photo}/>
    )
}