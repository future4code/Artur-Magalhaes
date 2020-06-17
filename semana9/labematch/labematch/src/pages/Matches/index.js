import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import api from '../../service/api'

import * as S from './style'
import { DivContainer, DivButtons, DivHeader } from '../../style/globalStyle'

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

  const clearMatches = () => {
    api.put('clear')
      .then(response => {
        setPersons([])
      })
      .catch(err => {
        console.log(err)
      })
  }

  return(
    <>
      <DivContainer>
        <DivHeader>
          <Link to="/">
            <S.ButtonMain>M</S.ButtonMain>
          </Link>
        </DivHeader>
        {persons.length > 0 ? persons.map((person) => (
          <S.DivScreen>
            <S.DivImage><S.ImgPerfil key={person.id} src={person.photo} /></S.DivImage>
            <S.DivName>{person.name}</S.DivName>
          </S.DivScreen>
        )) : 
          <S.DivZeroMatches>
            Não tem Matches!!
          </S.DivZeroMatches>
        }
      </DivContainer>
      <button onClick={clearMatches}>Clear</button>
    </>)
    
}