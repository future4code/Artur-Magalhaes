import React, { useState, useEffect } from 'react';

import api from '../../service/api'

import * as S from './style'

export default function Match() {
  const [person, setPerson] = useState({});

  const getApi = () => {
    api.get('person')
      .then(response => {
        console.log(response.data.profile)
        setPerson(response.data.profile)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getApi()
  },[])

  const choosePerson = (data) => {
    getApi()
    api.post('choose-person', data)
    .then(response => {
      console.log(response.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const onClickMatchTrue = (id) => {
    const data = {
      "id": id,
      "choice": true,
    }
    console.log(data)
    choosePerson(data)
  }

  const onClickMatchFalse = (id) => {
    const data = {
      "id": id,
      "choice": false,
    }
    choosePerson(data)
  }

  return(
    <>
      <S.ImagePerfil src={person.photo}/>
      <button onClick={() => onClickMatchFalse(person.id)}>X</button>
      <button onClick={() => onClickMatchTrue(person.id)}>S2</button>
    </>
    )
}