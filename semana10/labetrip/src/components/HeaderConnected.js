import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';

const Header = () => {
  const history = useHistory();
  
  const logout = () => {
      localStorage.clear()
      history.push('/')
  }

  return(
    <S.DivContainer> 
        <div></div>
        <S.DivButton onClick={() => history.replace('/listtrip')}>LaBeTrip</S.DivButton>
        <S.DivButton onClick={logout}>Logout</S.DivButton>
    </S.DivContainer>)
}

export default Header;