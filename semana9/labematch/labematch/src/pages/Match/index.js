import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../service/api'

import * as S from './style'
import { DivContainer, DivButtons, DivHeader } from '../../style/globalStyle'

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
    <DivContainer>
      <DivHeader>
        <Link to="/matches">
          <S.ButtonMatches>M</S.ButtonMatches>
        </Link>
      </DivHeader>
      <S.ImagePerfil src={person.photo}/>
      <DivButtons>
        <S.ButtonMatch onClick={() => onClickMatchFalse(person.id)}>X</S.ButtonMatch>
        <S.ButtonMatch onClick={() => onClickMatchTrue(person.id)}>S2</S.ButtonMatch>
      </DivButtons>
    </DivContainer>
    )
}